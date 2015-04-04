/// <reference path="../include.js" />

MPObject.Package = {};

//关注图包
MPObject.Package.Follow = function (packageID,callback) {
    if (!MPCheckLogin())
        return;
    $.post(host + "/ajax/follow-package", { package_id: packageID }, function (data) {
        if (data.code == 0) {
            if (callback) 
                callback();
        }
    }, "json");
}

//取消关注图包
MPObject.Package.UnFollow = function (packageID, callback) {
    if (!MPCheckLogin())
        return;
    $.post(host + "/ajax/unfollow-package", { package_id: packageID }, function (data) {
        if (data.code == 0) {
            if (callback)
                callback();
        }
    }, "json");
}

//赞图包(实用性待商榷)
MPObject.Package.Praise = function (packageID,callback) {
    if (!MPCheckLogin())
        return;
    $.post(host + "/ajax/praise-package", { package_id: packageID }, function (data) {
        if (data.code == 0) {
            if (callback)
                callback();
        }
    }, "json");
}

//取消赞赞图包(实用性待商榷)
MPObject.Package.Praise = function (packageID, callback) {
    if (!MPCheckLogin())
        return;
    $.post(host + "/ajax/unpraise-package", { package_id: packageID }, function (data) {
        if (data.code == 0) {
            if (callback)
                callback();
        }
    }, "json");
}