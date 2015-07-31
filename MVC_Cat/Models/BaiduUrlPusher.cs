using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Text;
using System.Threading;
using System.IO;
using Newtonsoft.Json.Linq;

public static class BaiduUrlPusher
{
    //static string _apiInterface = "http://data.zz.baidu.com/urls?site=www.miaopass.net&token=ToOG3hOvb5co4Fse";

    //static Queue<string> _pushList = new Queue<string>();
    //static string _logPath = HttpContext.Current.Server.MapPath("~/baidu_push_result.txt");

    //static int _retainCount = 50;

    static BaiduUrlPusher()
    {
        //var t = new Thread(new ThreadStart(PushThread));
        //t.IsBackground = true;
        //t.Start();
    }

    static void PushThread()
    {
        //while (true)
        //{
        //    if (_pushList.Count == 0)
        //    {
        //        Thread.Sleep(500);
        //        continue;
        //    }


        //    var url = _pushList.Dequeue();
        //    if (_retainCount == 0)
        //        continue;

        //    var wc = new WebClient();

        //    wc.Headers.Add("Content-Type", "text/plain");
        //    try
        //    {
        //        var res = wc.UploadData(_apiInterface, UTF8Encoding.UTF8.GetBytes(url));
        //        var resStr = UTF8Encoding.UTF8.GetString(res);
        //        var json = JObject.Parse(resStr);
        //        _retainCount = (int)json["remain"];

        //        File.AppendAllLines(_logPath, new string[] { DateTime.Now.ToString(), url, resStr, "" });
        //    }
        //    catch { }
        //}
    }

    static public void PushImage(int imageId)
    {
        //string url = Tools.Host + "/image/" + imageId;
        //_pushList.Enqueue(url);
    }

    static public void PushPackage(int packageId)
    {
        //string url = Tools.Host + "/package/" + packageId;
        //_pushList.Enqueue(url);
    }

    static public void PushUser(int userId)
    {
        //string url = Tools.Host + "/user/" + userId;
        //_pushList.Enqueue(url);
    }

    static public void PushTag(string tag)
    {
        //string url = Tools.Host + "/search/" + Uri.EscapeDataString(tag);
        //_pushList.Enqueue(url);
    }
}