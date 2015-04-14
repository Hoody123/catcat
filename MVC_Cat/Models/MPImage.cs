using System;
using System.Collections.Generic;
using System.Linq;
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
            db.ExecuteNonQuery("update image set via=0 where via=?",ID);
            db.EndTransaction();
        }
        var res = DB.SExecuteScalar("select id from image where fileid=?", FileID);
        if(res==null)
        {
            new MPFile(FileID).Delete();
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

    public void Edit(int packageid,string description,string url)
    {
        DB.SExecuteNonQuery("update image set packageid=?,description=?,url=?,host=? where id=?", packageid, description, url, ID,GetHost(url));
    }

    public static int Create(int packageid, int fileid, int userid, int via, string url, string description)
    {
       return  DB.SInsert("insert into image (packageid,fileid,userid,via,url,description,createdtime,host) values (?,?,?,?,?,?,?,?)", packageid, fileid, userid,via, url, description,DateTime.Now,GetHost(url));
    }

    void SetAttribute(string name, object value)
    {
        DB.SExecuteNonQuery("update picture set " + name + "=? where id=" + ID, value);
    }
}
