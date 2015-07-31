using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC_Cat.Controllers
{
    public class SearchController : Controller
    {
        public ActionResult Index(string keyword, string sub1, int page = 0)
        {
            keyword = keyword.Trim();
            sub1 = sub1.ToLower();
            var user = Session["user"] as MPUser;
            var datas = new List<object>();
            var limit = 20;

            switch (sub1)
            {
                case "user":
                    {
                        var res = DB.SExecuteReader("select id from user where name like concat('%',?,'%') order by id desc limit ?,?", keyword, page * limit, limit);
                        foreach (var item in res)
                        {
                            try
                            {
                                var u = new MPUser(Convert.ToInt32(item[0]));
                                datas.Add(new JSON.UserDetail(u, user));
                            }
                            catch { }
                        }
                    }
                    break;
                case "package":
                    {
                        var res = DB.SExecuteReader("select id from package where title like concat('%',?,'%') order by id desc limit ?,?", keyword, page * limit, limit);
                        foreach (var item in res)
                        {
                            try
                            {
                                var package = new MPPackage(Convert.ToInt32(item[0]));
                                datas.Add(new JSON.PackageDetail(package, user));
                            }
                            catch { }
                        }
                    }
                    break;
                default:
                    {
                        var res = DB.SExecuteReader("select image.id from image,package where image.packageid=package.id and (package.title like concat('%',?,'%') or image.description like concat('%',?,'%')) order by image.id desc limit ?,?", keyword,keyword,page*limit,limit);
                        foreach (var item in res)
                        {
                            try
                            {
                                var image = new MPImage(Convert.ToInt32(item[0]));
                                datas.Add(new JSON.ImageDetail(image, user));
                            }
                            catch { }
                        }
                    }
                    break;
            }

            if (Request.QueryString["ajax"] != null)
            {
                return Content(Tools.JSONStringify(datas));
            }

            ViewBag.Title=keyword+"_喵帕斯";

            bool isSpider = Convert.ToBoolean(RouteData.Values["isSpider"]);

            if (isSpider)
            {
                ViewBag.List = datas;
                ViewBag.Sub = sub1;
                ViewBag.Keyword = keyword;
                return View("index_spider");
            }
            else
            {
                ViewBag.MPData = new
                {
                    user = new JSON.User(user),
                    keyword = keyword,
                    sub1 = sub1,
                    datas = datas
                };
                return View();
            }
        }

    }
}
