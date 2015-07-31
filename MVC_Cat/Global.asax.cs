using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Routing;

namespace MVC_Cat
{
    // 注意: 有关启用 IIS6 或 IIS7 经典模式的说明，
    // 请访问 http://go.microsoft.com/?LinkId=9394801
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            WebApiConfig.Register(GlobalConfiguration.Configuration);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            Cleaner.Clean();

            Downloader.Start();
        }

        protected void Session_Start(object sender, EventArgs e)
        {
            string loginCookie = null;
            if (Request.Cookies["login"] != null)
                loginCookie = Request.Cookies["login"].Value;

            if (loginCookie != null)
            {
                var res = DB.SExecuteScalar("select userid from login_cookie where cookievalue=? and expire>?", loginCookie, DateTime.Now);
                if (res != null)
                {
                    Session["user"] = new MPUser(Convert.ToInt32(res));
                    return;
                }
            }
            
            Session["user"] = null;
        }
        
    }
}