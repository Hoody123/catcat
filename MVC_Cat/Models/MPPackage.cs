using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

public class MPPackage
{
    public int ID { get; set; }
    public int UserID { get; set; }

    string _title = "";
    public string Title
    {
        get
        {
            return _title;
        }
        set
        {
            if (_title.Equals(value, StringComparison.OrdinalIgnoreCase))
                return;

            if (value == "")
                throw new MiaopassException("图包名不能为空");

            try
            {
                SetAttribute("Title", value);
                _title = value;
            }
            catch (MySql.Data.MySqlClient.MySqlException)
            {
                throw new MiaopassPackageNameConflictException();
            }
        }
    }

    string _description = "";
    public string Description
    {
        get
        {
            return _description;
        }
        set
        {
            if (_description.Equals(value, StringComparison.OrdinalIgnoreCase))
                return;
            SetAttribute("Description", value);
            _description = value;
        }
    }

    int _coverID = 0;
    public int CoverID
    {
        get
        {
            return _coverID;
        }
        set
        {
            SetAttribute("CoverID", value);
            _coverID = value;
        }
    }

    public MPPackage(int id)
    {
        var res = DB.SExecuteReader("select userid,title,description,coverid from package where id=?", id);

        if (res.Count == 0)
            throw new MiaopassPackageNotExistException();

        var row = res[0];
        ID = id;
        UserID = Convert.ToInt32(row[0]);
        _title = (string)row[1];
        _description = (string)row[2];
        _coverID = Convert.ToInt32(row[3]);
    }

    public void Delete()
    {
        var list = DB.SExecuteReader("select id from image where packageid=?", ID);
        //清空所有图片
        foreach (var item in list)
        {
            var image = new MPImage(Convert.ToInt32(item[0]));
            image.Delete();
        }
        //开始事务处理
        using (var db = new DB())
        {
            db.BeginTransaction();
            //删除package表中的记录
            db.ExecuteNonQuery("delete from package where id=?", ID);
            //删除praise表中的记录
            db.ExecuteNonQuery("delete from praise where type=? and info=?", MPPraiseTypes.Package, ID);
            //删除following表中的记录
            db.ExecuteNonQuery("delete from following where type=? and info=?", MPFollowingTypes.Package, ID);
            db.EndTransaction();
        }
    }

    public static int Create(int userid, string title)
    {
        try
        {
            title = title.Trim();
            if (title == "")
                throw new MiaopassException("标题不能为空");

            var id= DB.SInsert("insert into package (userid,title,description,coverid) values (?,?,'',0)", userid, title);
            //BaiduUrlPusher.PushPackage(id);
            return id;
        }
        catch (MySql.Data.MySqlClient.MySqlException)
        {
            throw new MiaopassPackageNameConflictException();
        }
    }

    void SetAttribute(string name, object value)
    {
        DB.SExecuteNonQuery("update package set " + name + "=? where id=" + ID, value);
    }
}