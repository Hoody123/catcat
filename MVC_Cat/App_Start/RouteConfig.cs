using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace MVC_Cat
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute("home", "", new { controller = "all", action = "Index" });
            routes.MapRoute("all", "all/", new { controller = "all", action = "index" });
            routes.MapRoute("ajax", "ajax/{act}", new { controller = "ajax", action = "index" });
            routes.MapRoute("image", "image/{id}", new { controller = "image", action = "index" }, new { id="\\d+"});
            routes.MapRoute("image-big", "image/{id}/big", new { controller = "image", action = "zoom" }, new { id = "\\d+" });
            routes.MapRoute("from", "from/{host}", new { controller = "from", action = "index" });
            routes.MapRoute("pick", "pick", new { controller = "pick", action = "index" });
            routes.MapRoute("package", "package/{id}/{sub1}", new { controller = "package", action = "index", sub1 = "" }, new { id="\\d+"});
            routes.MapRoute("user", "user/{id}/{sub1}/{sub2}", new { controller = "user", action = "index", sub1 = "", sub2 = "" }, new { id = "\\d+" });
            routes.MapRoute("account-signup-email", "account/{action}/{token}", new { controller = "account"});
            routes.MapRoute("search_default", "search/{keyword}", new { controller = "search", action = "index" ,sub1=""});
            routes.MapRoute("search", "search/{sub1}/{keyword}", new { controller = "search", action = "index"});
            routes.MapRoute("setting", "setting/{sub1}", new { controller = "setting", action = "index", sub1 = "" });

            routes.MapRoute("default", "{controller}/{action}", new { action = "index" });
        }
    }
}