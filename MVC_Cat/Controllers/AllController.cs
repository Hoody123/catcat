using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC_Cat.Controllers
{
    public class AllController : Controller
    {
        public ActionResult Index(int max = 0)
        {
            int limit = 20;
            MPUser user = Session["user"] as MPUser;
            if (max == 0)
                max = int.MaxValue;
            var res = DB.SExecuteReader("select id from image where id<? order by id desc limit ?", max, limit);
            List<JSON.ImageDetail> list = new List<JSON.ImageDetail>();
            foreach (var item in res)
            {
                try
                {
                    list.Add(new JSON.ImageDetail(new MPImage(Convert.ToInt32(item[0])), user));
                }
                catch { }
            }

            if (Request.QueryString["ajax"] != null)
            {
                return Json(list, JsonRequestBehavior.AllowGet);
            }

            ViewBag.Title = "首页_喵帕斯";

            bool isSpider = Convert.ToBoolean(RouteData.Values["isSpider"]);
            if (isSpider)
            {
                ViewBag.List = list;
                return View("index_spider");
            }
            else
            {
                ViewBag.MPData = new
                {
                    user = new JSON.User(user),
                    images = list
                };
                return View();
            }
        }

    }
}
