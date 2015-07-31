using System.Web;
using System.Web.Mvc;

namespace MVC_Cat
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
           filters.Add(new SpiderFilter());
        }
    }
}