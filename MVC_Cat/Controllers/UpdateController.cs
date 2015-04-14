using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.IO;

namespace MVC_Cat.Controllers
{
    public class UpdateController : Controller
    {
        //
        // GET: /Update/

        public ActionResult Index()
        {
            using(var db = new DB("Database=miaopass;Data Source=rdser6nv3jmfumj.mysql.rds.aliyuncs.com;Port=3301;User Id=miaopass_boss;Password=CTonCD9yBIsa1Xhd;charset=utf8"))
            {
                var packages = db.ExecuteReader("select name from t_package");
                foreach (var item in packages)
                {
                    Response.Write(string.Format("http://www.miaopass.net/package.aspx?name={0}<br/>",item[0]));
                }
                var images = db.ExecuteReader("select count(*),t.name from r_package_image as r,t_package as t where r.packageid=t.id group by r.packageid");
                foreach (var item in images)
                {
                    for (int i = 0; i < Convert.ToInt32( item[0]); i++)
                    {
                        Response.Write(string.Format("http://www.miaopass.net/image.aspx?name={0}&p={1}<br/>", item[1],i));
                    }
                }
                var tags = db.ExecuteReader("select text from t_tag");
                foreach (var item in tags)
                {
                    Response.Write(Uri.EscapeUriString(string.Format("http://www.miaopass.net/search.aspx?kw={0}", item[0])) + "<br/>");
                }
            }
            return null;
        }

    }
}
