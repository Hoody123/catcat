/// <reference path="../include.js" />

MPObject.Package = {};

//关注图包
MPObject.Package.Follow = function (packageID, callback)
{
    if (!MPCheckLogin())
        return;
    $.post(host + "/ajax/follow-package", { package_id: packageID }, function (data)
    {
        if (data.code == 0)
        {
            if (callback)
                callback();
        }
    }, "json");
}

//取消关注图包
MPObject.Package.UnFollow = function (packageID, callback)
{
    if (!MPCheckLogin())
        return;
    //var box = MPMessageBox.New(MPMessageBox.Icons.Warn, "确认要取消该图包的关注吗>_<");
    //box.onOK = function ()
    //{
    $.post(host + "/ajax/unfollow-package", { package_id: packageID }, function (data)
    {
        if (data.code == 0)
        {
            if (callback)
                callback();
        }
    }, "json");
    //}
}

//赞图包(实用性待商榷)
MPObject.Package.Praise = function (packageID, callback)
{
    if (!MPCheckLogin())
        return;
    $.post(host + "/ajax/praise-package", { package_id: packageID }, function (data)
    {
        if (data.code == 0)
        {
            if (callback)
                callback();
        }
    }, "json");
}

//取消赞赞图包(实用性待商榷)
MPObject.Package.Praise = function (packageID, callback)
{
    if (!MPCheckLogin())
        return;
    $.post(host + "/ajax/unpraise-package", { package_id: packageID }, function (data)
    {
        if (data.code == 0)
        {
            if (callback)
                callback();
        }
    }, "json");
}

//编辑图包
MPObject.Package.Edit = function (packageID, title, description, callback)
{
    if (!MPCheckLogin())
        return;
    var dialog = MPCreatePackageDialog.New(true, packageID, title, description);
    dialog.onDelete = function ()
    {
        if (callback)
            callback();
        else
            location.reload();
    }
}