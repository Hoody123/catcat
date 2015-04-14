using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC_Cat.Controllers
{
    public class SettingController : Controller
    {
        //
        // GET: /Setting/

        public ActionResult Index(string sub1)
        {
            var user = Session["user"] as MPUser;
            if(user==null)
            {
                return HttpNotFound();
            }

            ViewBag.Title = "帐号设置";

            ViewBag.MPData = new { 
                user=new JSON.User(user),
                sub1=sub1,
                basic_email=user.Email,
                basic_description=user.Description
            };
            return View();
        }

    }
}
