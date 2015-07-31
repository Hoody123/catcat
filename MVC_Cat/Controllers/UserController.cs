using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC_Cat.Controllers
{
    public class UserController : Controller
    {
        public ActionResult Index(int id, string sub1, string sub2)
        {
            MPUser pageUser = null;
            try
            {
                pageUser = new MPUser(id);
            }
            catch (MiaopassException)
            {
                return HttpNotFound();
            }

            int max = 0;
            try
            {
                max = Tools.GetInt32FromRequest(Request.QueryString["max"]);
            }
            catch { }

            if (max == 0)
            {
                max = Int32.MaxValue;
            }

            int limit = 20;
            var datas = new List<object>();

            switch (sub1)
            {
                case "image":
                    {
                        var res = DB.SExecuteReader("select id from image where userid=? and id<? order by id desc limit ?", pageUser.ID, max, limit);
                        foreach (var item in res)
                        {
                            try
                            {
                                datas.Add(new JSON.ImageDetail(new MPImage(Convert.ToInt32(item[0])), Session["user"] as MPUser));
                            }
                            catch (MiaopassException) { }
                        }
                        int n = res.Count;
                        if (n != 0)
                        {
                            max = Convert.ToInt32(res[n-1][0]);
                        }
                    }
                    break;
                case "praise":
                    {
                        var res = DB.SExecuteReader("select info,id from praise where userid=? and type=? and id<? order by id desc limit ?", pageUser.ID, MPPraiseTypes.Image, max, limit);
                        foreach (var item in res)
                        {
                            try
                            {
                                datas.Add(new JSON.ImageDetail(new MPImage(Convert.ToInt32(item[0])), Session["user"] as MPUser));
                            }
                            catch (MiaopassException) { }
                        }
                        int n = res.Count;
                        if (n != 0)
                        {
                            max = Convert.ToInt32(res[n-1][1]);
                        }
                    }
                    break;
                case "following":
                    {
                        switch (sub2)
                        {
                            case "package":
                                {
                                    var res = DB.SExecuteReader("select info,id from following where userid=? and type=? and id<? order by id desc limit ?", pageUser.ID, MPFollowingTypes.Package, max, limit);
                                    foreach (var item in res)
                                    {
                                        try
                                        {
                                            datas.Add(new JSON.PackageDetail(new MPPackage(Convert.ToInt32(item[0])), Session["user"] as MPUser));
                                        }
                                        catch (MiaopassException) { }
                                    }
                                    int n = res.Count;
                                    if (n != 0)
                                    {
                                        max = Convert.ToInt32(res[n-1][1]);
                                    }
                                }
                                break;
                            default:
                                {
                                    var res = DB.SExecuteReader("select info,id from following where userid=? and type=? and id<? order by id desc limit ?", pageUser.ID, MPFollowingTypes.User, max, limit);
                                    foreach (var item in res)
                                    {
                                        try
                                        {
                                            datas.Add(new JSON.UserDetail(new MPUser(Convert.ToInt32(item[0])), Session["user"] as MPUser));
                                        }
                                        catch (MiaopassException) { }
                                    }
                                    int n = res.Count;
                                    if (n != 0)
                                    {
                                        max = Convert.ToInt32(res[n-1][1]);
                                    }
                                }
                                break;
                        }
                    }
                    break;
                case "follower":
                    {
                        var res = DB.SExecuteReader("select userid,id from following where info=? and type=? and id<? order by id desc limit ?", pageUser.ID, MPFollowingTypes.User, max, limit);
                        foreach (var item in res)
                        {
                            try
                            {
                                datas.Add(new JSON.UserDetail(new MPUser(Convert.ToInt32(item[0])), Session["user"] as MPUser));
                            }
                            catch (MiaopassException) { }
                        }
                        int n = res.Count;
                        if (n != 0)
                        {
                            max = Convert.ToInt32(res[n-1][1]);
                        }
                    }
                    break;
                default:
                    {
                        var res = DB.SExecuteReader("select id from package where userid=? and id<? order by id desc limit 10", pageUser.ID, max);
                        foreach (var item in res)
                        {
                            try
                            {
                                datas.Add(new JSON.PackageDetail(new MPPackage(Convert.ToInt32(item[0])), Session["user"] as MPUser));
                            }
                            catch (MiaopassException) { }
                        }
                        int n = res.Count;
                        if (n != 0)
                        {
                            max = Convert.ToInt32(res[n-1][0]);
                        }
                    }
                    break;
            }

            if (Request.QueryString["ajax"] != null)
            {
                return Content(Tools.JSONStringify(new { datas = datas, data_max = max }));
            }

            ViewBag.Title = string.Format("{0}的主页_喵帕斯", pageUser.Name);
            ViewBag.Keywords = string.Format("{0}收集的图片,图包", pageUser.Name);
            ViewBag.Description = pageUser.Description;


            bool isSpider = Convert.ToBoolean(RouteData.Values["isSpider"]);
            if (isSpider)
            {
                ViewBag.User = new JSON.UserDetail(pageUser, Session["user"] as MPUser);
                ViewBag.Sub1 = sub1;
                ViewBag.Sub2 = sub2;
                ViewBag.Datas = datas;
                return View("index_spider");
            }
            else
            {
                ViewBag.MPData = new
                {
                    user = new JSON.User(Session["user"] as MPUser),
                    page_user = new JSON.UserDetail(pageUser, Session["user"] as MPUser),
                    sub1 = sub1,
                    sub2 = sub2,
                    datas = datas,
                    data_max = max
                };
                return View();
            }
        }

    }
}
