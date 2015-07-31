using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;

namespace MVC_Cat
{
    public class Cleaner
    {
        /// <summary>
        /// 清理磁盘垃圾
        /// </summary>
        public static void Clean()
        {
            var server = HttpContext.Current.Server;

            //清理mp_done中的文件
            foreach (var item in Directory.GetFiles(server.MapPath("~/mp_done")))
            {
                File.Delete(item);
            }

            //清理mp_temp中的文件
            foreach (var item in Directory.GetFiles(server.MapPath("~/mp_temp")))
            {
                File.Delete(item);
            }
        }
    }
}