using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

public class MPTag
{
    public int ID { get; set; }
    public string Text { get; set; }

    void Initialize(string filter,params object[] values)
    {
        var res = DB.SExecuteReader("select id,`text` from tag where " + filter, values);
        if (res.Count == 0)
            throw new MiaopassException("标签不存在");

        var row=res[0];
        ID = Convert.ToInt32(row[0]);
        Text = (string)row[1];
    }

    public MPTag(int id)
    {
        Initialize("id=?", id);
    }

    public MPTag(string text)
    {
        Initialize("`text`=?", text);
    }

    public int Create(string text)
    {
        text=text.Trim();
        if(text=="")
            throw new MiaopassException("标签为空");

        try
        {
            return new MPTag(text).ID;
        }
        catch
        {
           var tagId= DB.SInsert("insert ignore into tag (`text`) values (?)", text);
           BaiduUrlPusher.PushTag(text);
           return tagId;
        }
    }
}