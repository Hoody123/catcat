using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using System.Threading;
using System.IO;

public static class Downloader
{
    static int _downloadThreadCount = 0;

    static int _maxDownloadThreadCount = 3;

    static Thread _mainThread = null;

    static Queue<DownloadTask> _tasks = new Queue<DownloadTask>();

    static string _baseDirectory = HttpContext.Current.Server.MapPath("~/");

    public static void Start()
    {
        if (_mainThread == null)
        {
            _mainThread = new Thread(new ThreadStart(MainThreadWorker));
            _mainThread.IsBackground = true;
            _mainThread.Start();
        }
    }

    static void LoadTaskFromDB()
    {
        var res = DB.SExecuteReader("select id from task_download where trycount<5");
        foreach (var item in res)
        {
            try
            {
                var task = new DownloadTask(Convert.ToInt32(item[0]));
                _tasks.Enqueue(task);
            }
            catch (MiaopassException)
            {
                DB.SExecuteNonQuery("delete from task_download where id=?", Convert.ToInt32(item[0]));
            }
        }
    }

    static void MainThreadWorker()
    {
        //将所有已开始但未完成的所有任务设置为未开始
        DB.SExecuteNonQuery("update download set state=? where state=?", MPDownloadStates.Unstarting, MPDownloadStates.Starting);

        while (true)
        {
            if (_downloadThreadCount >= _maxDownloadThreadCount)
            {
                Thread.Sleep(1000);
                continue;
            }

            var res = DB.SExecuteReader("select id,source,`from` from download where state=? limit 1", MPDownloadStates.Unstarting);
            if (res.Count == 0)
            {
                Thread.Sleep(1000);
                continue;
            }

            var id = Convert.ToInt32(res[0][0]);
            var source = (string)res[0][1];
            var from = (string)res[0][2];

            DB.SExecuteNonQuery("update download set state=? where id=?", MPDownloadStates.Starting, id);

            Thread t = new Thread(new ParameterizedThreadStart(DownloadThredWorker));
            t.IsBackground = true;
            t.Start(new object[] { id, source, from });
            _downloadThreadCount++;

            //DownloadTask task = null;

            //if (_tasks.Count == 0 && _downloadThreadCount == 0)
            //    LoadTaskFromDB();

            //if (_tasks.Count != 0 && _downloadThreadCount < 3)
            //{
            //    task = _tasks.Dequeue();
            //}

            //if (task == null)
            //{
            //    Thread.Sleep(1000);
            //    continue;
            //}

            //Thread t = new Thread(new ParameterizedThreadStart(DownloadThredWorker));
            //t.IsBackground = true;
            //t.Start(task);
            //_downloadThreadCount++;
        }
    }

    static string DownloadFile(string source, string from, string filepath)
    {
        WebClient wc = new WebClient();
        wc.Headers.Add("Referer", from);
        wc.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 6.1; rv:35.0) Gecko/20100101 Firefox/35.0");
        int tryCount = 0;
        while (tryCount < 5)
        {
            try
            {
                wc.DownloadFile(source, filepath);
                break;
            }
            catch { tryCount++; }
        }

        if (tryCount == 5)
            return "";
        else return Tools.FileMd5(filepath);
    }

    static void DownloadThredWorker(object obj)
    {
        var ps = obj as object[];
        var id = (int)ps[0];
        var source = (string)ps[1];
        var from = (string)ps[2];
        //DownloadTask task = obj as DownloadTask;
        string hash1 = "";
        string hash2 = "";
        string filePath1 = "";
        string filePath2 = "";
        int tryCount = 0;

        //try
        //{
        filePath1 = _baseDirectory + "mp_done\\" + Tools.BytesToString(Guid.NewGuid().ToByteArray());
        hash1 = DownloadFile(source, from, filePath1);
        //if (hash1 == "")
        //{
        //    throw new MiaopassDownloadFailedException();
        //}

        while (tryCount < 5)
        {
            //    if (tryCount == 5)
            //        throw new MiaopassDownloadFailedException();

            filePath2 = _baseDirectory + "mp_done\\" + Tools.BytesToString(Guid.NewGuid().ToByteArray());
            hash2 = DownloadFile(source, from, filePath2);
            //if (hash2 == "")
            //{
            //    throw new MiaopassDownloadFailedException();
            //}

            if (hash1 != hash2)
            {
                File.Delete(filePath1);

                filePath1 = filePath2;
                hash1 = hash2;

                tryCount++;

                continue;
            }
            else
            {
                break;
            }
        }
        //}
        //catch (MiaopassException)
        //{
        //    File.Delete(filePath1);
        //    File.Delete(filePath2);
        //    task.TryCount++;
        //    return;
        //}

        try
        {
            if (hash1 == "" || hash2 == "")
                throw new MiaopassException("文件下载失败");

            int fileid = 0;
            using (var filestream = File.OpenRead(filePath1))
            {
                fileid = MPFile.Create(filestream);
            }

            DB.SExecuteNonQuery("update download set state=?,fileid=? where id=?", MPDownloadStates.Finished, fileid, id);

            var res = DB.SExecuteReader("select id,packageid,description from pick where downloadid=?", id);
            foreach (var item in res)
            {
                var pickId = Convert.ToInt32(item[0]);
                var packageId = Convert.ToInt32(item[1]);
                var description = (string)item[2];
                MPPackage package = null;
                try
                {
                    package = new MPPackage(packageId);
                }
                catch
                {
                    continue;
                }

                MPImage.Create(packageId, fileid, package.UserID, 0, from, description);
                DB.SExecuteNonQuery("delete from pick where id=?", pickId);
            }
        }
        catch { }        //MPImage.Create(task.Package.ID, fileid, task.User.ID, 0, task.From, task.Description);
        finally
        {
            File.Delete(filePath1);
            File.Delete(filePath2);
            //DB.SExecuteNonQuery("delete from task_download where id=?", task.ID);
            _downloadThreadCount--;
        }
    }
}

public class DownloadTask
{
    public int ID { get; set; }
    public MPUser User { get; set; }
    public MPPackage Package { get; set; }
    public string Source { get; set; }
    public string From { get; set; }
    public string Description { get; set; }

    int _tryCount = 0;
    public int TryCount
    {
        get
        {
            return _tryCount;
        }
        set
        {
            _tryCount = value;
            DB.SExecuteNonQuery("update task_download set trycount=? where id=?", ID);
        }
    }

    public DownloadTask(int id)
    {
        var res = DB.SExecuteReader("select id,packageid,userid,source,`from`,description,trycount from task_download where id=?", id);

        var row = res[0];
        ID = id;
        Package = new MPPackage(Convert.ToInt32(row[1]));
        User = new MPUser(Convert.ToInt32(row[2]));
        Source = (string)row[3];
        From = (string)row[4];
        Description = (string)row[5];
        _tryCount = Convert.ToInt32(row[6]);
    }
    public static void Create(string source, string from, int packageid, int userid, string description)
    {
        DB.SExecuteNonQuery("insert into task_download (source,`from`,packageid,userid,description) values (?,?,?,?,?)", source, from, packageid, userid, description);
    }
}