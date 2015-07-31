using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text.RegularExpressions;

public class MPComment
{
    public int ID { get; set; }
    public int ImageID { get; set; }
    public int UserID { get; set; }
    public string Text { get; set; }
    public DateTime CreatedTime { get; set; }
    public MPComment(int id)
    {
        var res = DB.SExecuteReader("select id,imageid,userid,`text`,createdtime from comment where id=?", id);
        if (res.Count == 0)
        {
            throw new MiaopassException("没有该评论或评论已经删除");
        }

        var row = res[0];
        ID = Convert.ToInt32(row[0]);
        ImageID = Convert.ToInt32(row[1]);
        UserID = Convert.ToInt32(row[2]);
        Text = (string)row[3];
        CreatedTime = Convert.ToDateTime(row[4]);
    }

    public void Delelte()
    {
        using(var db=new DB())
        {
            db.BeginTransaction();
            //删除这条评论@的人信息
            db.ExecuteNonQuery("delete from comment_mention where commentid=?", ID);
            //删除和这条评论有关的所有消息
            db.ExecuteNonQuery("delete from message where target=? and (type=? or type=? or type=?", ID, MPMessageTypes.Comment, MPMessageTypes.Mention, MPMessageTypes.Reply);
            //删除这条评论自身
            db.ExecuteNonQuery("delete from comment where id=?", ID);
            db.EndTransaction();
        }
    }

    public static int Create(int imageid, int userid, string text)
    {
        int id = DB.SInsert("insert into comment (imageid,userid,`text`) values (?,?,?)", imageid, userid, text);
       Regex r=new Regex("@[\\w\\S]+");

        var match=r.Match(text);
        while(match.Success==true)
        {
            int pos = match.Index;
            int len = match.Length;
            string name = match.Value.Substring(1);
            try
            {
                var user = new MPUser(name, MPUserConstructTypes.Name);
                MPCommentMention.Create(id, user.ID, pos, len);
            }
            catch (MiaopassException) { }
            match=match.NextMatch();
        }
      
        //int pos = 0;
        //while (true)
        //{
        //    pos = text.IndexOf('@', pos);
        //    if (pos == -1)
        //        break;

        //    int end1 = text.IndexOf(' ', pos);
        //    int end2 = text.IndexOf('@', pos);
        //    int end = -1;
        //    if(end1<end2 && end1!=-1)
        //    {
        //        end = end1;
        //    }
        //    else

        //    if (end == -1)
        //        end = text.Length;

        //    int length = end - pos;

        //    string name = text.Substring(pos + 1, length - 1);
        //    try
        //    {
        //        var user = new MPUser(name, MPUserConstructTypes.Name);
        //        MPCommentMention.Create(id, user.ID, pos, length);
        //    }
        //    catch (MiaopassException) { }

        //    if (end == text.Length)
        //        break;
        //    pos = end + 1;
        //}
        return id;
    }
}

public class MPCommentMention
{
    public int ID { get; set; }
    public int CommentID { get; set; }
    public int UserID { get; set; }
    public int Position { get; set; }
    public int Length { get; set; }
    public MPCommentMention(int id)
    {
        var res = DB.SExecuteReader("select id,commentid,userid,position,length from comment_mention where id=?", id);
        if (res.Count == 0)
        {
            throw new MiaopassException("没有@这个人");
        }

        var row = res[0];
        ID = Convert.ToInt32(row[0]);
        CommentID = Convert.ToInt32(row[1]);
        UserID = Convert.ToInt32(row[2]);
        Position = Convert.ToInt32(row[3]);
        Length = Convert.ToInt32(row[4]);
    }

    public static void Create(int commentId, int userId, int position, int length)
    {
        DB.SExecuteNonQuery("insert into comment_mention (commentid,userid,position,length) values (?,?,?,?)", commentId, userId, position, length);
    }
}