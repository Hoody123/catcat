using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;

public class MPImage
{
    public int ID { get; set; }
    public int PackageID { get; set; }
    public int FileID { get; set; }
    public DateTime CreatedTime { get; set; }
    public int Via { get; set; }
    public string Url { get; set; }
    public string Host { get; set; }
    public int UserID { get; set; }

    string _description = "";
    public string Description
    {
        get
        {
            return _description;
        }
        set
        {
            SetAttribute("Description", value);
            _description = value;
        }
    }
    public MPImage(int id)
    {
        Initialize("id=?", id);
    }

    public MPImage(int packageId, int fileId)
    {
        Initialize("packageid=? and fileid=?", packageId, fileId);
    }

    void Initialize(string condition, params object[] objs)
    {
        string sql = "select packageid,fileid,createdtime,via,url,description,id,userid,host from image where " + condition;
        var res = DB.SExecuteReader(sql, objs);

        if (res.Count == 0)
            throw new MiaopassPictureNotExistException();

        var row = res[0];
        PackageID = Convert.ToInt32(row[0]);
        FileID = Convert.ToInt32(row[1]);
        CreatedTime = Convert.ToDateTime(row[2]);
        Via = Convert.ToInt32(row[3]);
        Url = (string)row[4];
        _description = (string)row[5];
        ID = Convert.ToInt32(row[6]);
        UserID = Convert.ToInt32(row[7]);
        Host = (string)row[8];
    }

    public void Delete()
    {
        //数据处理事务
        using (var db = new DB())
        {
            db.BeginTransaction();
            //从image表中删除数据    
            db.ExecuteNonQuery("delete from image where id=?", ID);
            //从praise表中删除关于赞这张图片的数据
            db.ExecuteNonQuery("delete from praise where info=? and type=?", ID, MPPraiseTypes.Image);
            //更新package表中的封面数据
            db.ExecuteNonQuery("update package set coverid=0 where id=? and coverid=?", PackageID, ID);
            //更新image表中,转存过这张图的行数据更新\
            db.ExecuteNonQuery("update image set via=? where via=?", Via, ID);
            //删除所有关于这张图片的评论
            var res = DB.SExecuteReader("select id from comment where imageid=?", ID);
            foreach (var item in res)
            {
                int id = Convert.ToInt32(item[0]);
                var comment = new MPComment(id);
                comment.Delelte();
            }
            //删除关于这张图片的动态
            db.ExecuteNonQuery("delete from activity where target=? and (type=? or type=? or type=?)", ID, MPActivityTypes.Praise, MPActivityTypes.Resave, MPActivityTypes.ResaveThrough);
            db.EndTransaction();
        }
    }

    static string GetHost(string url)
    {
        var host = "";
        try
        {
            var uri = new Uri(url);
            host = uri.Host;
        }
        catch { }
        return host;
    }

    public void Edit(int packageid, string description, string url)
    {
        DB.SExecuteNonQuery("update image set packageid=?,description=?,url=?,host=? where id=?", packageid, description, url, GetHost(url), ID);
    }

    public static int Create(int packageid, int fileid, int userid, int via, string url, string description)
    {
        var id = DB.SInsert("insert into image (packageid,fileid,userid,via,url,description,createdtime,host) values (?,?,?,?,?,?,?,?)", packageid, fileid, userid, via, url, description, DateTime.Now, GetHost(url));
        //BaiduUrlPusher.PushImage(id);

        //如果是第一次创建图片,通知wnspice添加了新图片呢
        var count = Convert.ToInt32(DB.SExecuteScalar("select count(*) from image where fileid=?", fileid));

        if (count == 1)
        {
            var file = new MPFile(fileid);
            var wc = new WebClient();
            var host = Tools.GetSetting("WnsHost");
            description = HttpUtility.UrlEncode((HttpUtility.HtmlEncode(description)));

            var u = host + string.Format("ajax/update?token={3}&md5={0}&width={1}&height={2}&description={4}", file.MD5, file.Width, file.Height, Tools.WnsAccessToken, description);
            wc.DownloadString(u);
        }
        return id;
    }

    void SetAttribute(string name, object value)
    {
        DB.SExecuteNonQuery("update picture set " + name + "=? where id=" + ID, value);
    }
}
