using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC_Cat.Controllers
{
    public class ImageController : Controller
    {
        string MakeTitle(string imageDescription, string packageTitle, string username)
        {
            var description = imageDescription.Length > 20 ? imageDescription.Substring(0, 20) + "..." : imageDescription;
            return description + "@" + username + "收集到" + packageTitle + "_喵帕斯";
        }

        public ActionResult Index(int id)
        {
            MPImage image = null;
            try
            {
                image = new MPImage(id);
            }
            catch
            {
                return HttpNotFound();
            }

            var imageDetail = new JSON.ImageDetail(image, Session["user"] as MPUser);

            if (Request.QueryString["ajax"] != null)
            {
                return Content(Tools.JSONStringify(imageDetail), "application/json");
            }

            ViewBag.Title = MakeTitle(imageDetail.description, imageDetail.package.title, imageDetail.user.name);
            ViewBag.Keywords = imageDetail.description;
            ViewBag.Description = image.Description;

            bool isSpider = Convert.ToBoolean(RouteData.Values["isSpider"]);
            if (isSpider)
            {
                ViewBag.Image = imageDetail;
                var prevId = Convert.ToInt32(DB.SExecuteScalar("select id from image where id<? limit 1", image.ID));
                if (prevId != 0)
                {
                    var image1 = new MPImage(prevId);
                    var package1 = new MPPackage(image1.PackageID);
                    var user1 = new MPUser(image1.UserID);
                    ViewBag.PrevID = prevId;
                    ViewBag.PrevText = MakeTitle(image1.Description, package1.Title, user1.Name);
                }

                var nextId = Convert.ToInt32(DB.SExecuteScalar("select id from image where id>? limit 1", image.ID));
                if (nextId != 0)
                {
                    var image1 = new MPImage(nextId);
                    var package1 = new MPPackage(image1.PackageID);
                    var user1 = new MPUser(image1.UserID);
                    ViewBag.NextID = nextId;
                    ViewBag.NextText = MakeTitle(image1.Description, package1.Title, user1.Name);
                }

                return View("index_spider");
            }
            else
            {
                ViewBag.MPData = new
                {
                    user = new JSON.User(Session["user"] as MPUser),
                    image = imageDetail
                };
                return View();
            }
        }

        public ActionResult Zoom(int id)
        {
            MPImage img = null;
            try
            {
                img = new MPImage(id);
            }
            catch
            {
                return HttpNotFound();
            }

            ViewBag.Hash = new MPFile(img.FileID).MD5;

            return View();
        }
    }
}
