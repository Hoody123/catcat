using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC_Cat.Controllers
{
    public class FromController : Controller
    {
        public ActionResult Index(string host,int limit=20)
        {
            try
            {
                limit = Tools.GetInt32FromRequest(Request.QueryString["limit"]);
            }
            catch { }

            int max = Int32.MaxValue;
            try
            {
                max = Tools.GetInt32FromRequest(Request.QueryString["max"]);
            }
            catch { }

            var res = DB.SExecuteReader("select id from image where host=? and id<? order by id desc limit ?",host,max,limit);
            var images = new List<object>();

            var user=Session["user"] as MPUser;
            foreach (var item in res)
            {
                try
                {
                    images.Add(new JSON.ImageDetail(new MPImage(Convert.ToInt32(item[0])), user));
                }
                catch (MiaopassException) { }
            }

            if(Request.QueryString["ajax"]!=null)
            {
                return Content(Tools.JSONStringify(images),"application/json");
            }

            ViewBag.Title = "来自" + host + "的图片_喵帕斯";
            ViewBag.MPData = new { 
                user=new JSON.User(user),
                host=host,
                images=images
            };
            return View();
        }

    }
}
