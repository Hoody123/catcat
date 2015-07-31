using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC_Cat.Controllers
{
    public class PackageController : Controller
    {
        public ActionResult Index(int id, string sub1)
        {
            MPPackage package = null;
            try
            {
                package = new MPPackage(id);
            }
            catch
            {
                return HttpNotFound();
            }

            int limit = 10;
            int max = Convert.ToInt32(Request.QueryString["max"]);
            if (max == 0)
                max = Int32.MaxValue;

            var list = new List<object>();
            switch (sub1)
            {
                case "follower":
                    {
                        var res = DB.SExecuteReader("select userid from following where type=? and info=? and id<? order by id limit ?", MPFollowingTypes.Package, package.UserID, max, limit);
                        foreach (var item in res)
                        {
                            try
                            {
                                list.Add(new JSON.UserDetail(new MPUser(Convert.ToInt32(item[0])), Session["user"] as MPUser));
                            }
                            catch (MiaopassException) { }
                        }
                    }
                    break;
                default:
                    {
                        var res = DB.SExecuteReader("select id from image where id<? and packageid=? order by id desc limit ?", max, package.ID, limit);
                        if (Request.QueryString["simple"] != null && Request.QueryString["ajax"] != null)
                        {
                            foreach (var item in res)
                            {
                                try
                                {
                                    list.Add(new JSON.Image(new MPImage(Convert.ToInt32(item[0]))));
                                }
                                catch (MiaopassException) { }
                            }
                        }
                        else
                        {
                            foreach (var item in res)
                            {
                                try
                                {
                                    list.Add(new JSON.ImageDetail(new MPImage(Convert.ToInt32(item[0])), Session["user"] as MPUser));
                                }
                                catch (MiaopassException) { }
                            }
                        }
                    }
                    break;
            }


            if (Request.QueryString["ajax"] != null)
            {
                return Content(Tools.JSONStringify(list));
            }

            var packageDetail = new JSON.PackageDetail(package, Session["user"] as MPUser);
            string title = package.Title.Length > 20 ? package.Title.Substring(0, 20) + "..." : package.Title;

            ViewBag.Title = string.Format("{0}@{1}收集_喵帕斯", title, packageDetail.user.name);
            ViewBag.Keywords = package.Title;
            ViewBag.Description = package.Description;

            bool isSpider = Convert.ToBoolean(RouteData.Values["isSpider"]);
            if (isSpider)
            {
                ViewBag.Package = packageDetail;
                ViewBag.Sub1 = sub1;
                ViewBag.Datas = list;
                return View("index_spider");
            }
            else
            {
                ViewBag.MPData = new
                {
                    user = new JSON.User(Session["user"] as MPUser),
                    package = packageDetail,
                    sub1 = sub1,
                    datas = list
                };
                return View();
            }
        }

    }
}
