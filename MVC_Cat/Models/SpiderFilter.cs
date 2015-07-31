using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MVC_Cat
{
    public class SpiderFilter : System.Web.Mvc.ActionFilterAttribute
    {
        public override void OnActionExecuting(System.Web.Mvc.ActionExecutingContext filterContext)
        {
            var http = filterContext.HttpContext;
            var agent = http.Request.UserAgent;
            if (agent == null)
                agent = "";
            else
                agent = agent.ToLower();

            if (agent != null)
            {
                if (
                    agent.Contains("baiduspider")           //百度
                    // || agent.Contains("googlebot")       //谷歌
                    || agent.Contains("360spider")            //360
                    || agent.Contains("bingbot")               //必应
                    )           
                {
                    filterContext.RouteData.Values.Add("isSpider", true);
                }
            }
            base.OnActionExecuting(filterContext);
        }
    }
}