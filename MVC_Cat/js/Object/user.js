/// <reference path="../include.js" />

MPObject.User = {};

MPObject.User.Avt = function (user) {
    if (user.default_head == true)
        return imageHost + "/avt/0";
    else
        return imageHost + "/avt/" + user.id;
}

MPObject.User.BigAvt = function (user) {
    if (user.default_head == true)
        return imageHost + "/avt/0_big";
    else
        return imageHost + "/avt/" + user.id + "_big";
}

MPObject.User.ID = function (user) {
    return user.id;
}

MPObject.User.Name = function (user) {
    return user.name;
}

//用户操作
MPObject.User.Actions = {};

//关注用户
MPObject.User.Actions.Follow = function (userid,callback) {
    if (!MPCheckLogin()) {
        return;
    }
    $.post(host + "/ajax/follow-user", { user_id: userid }, function (data) {
        if (data.code==0) {
            if (callback) {
                callback();
            }
        }
    }, "json");
}

//取消关注用户
MPObject.User.Actions.UnFollow = function (userid, callback) {
    if (!MPCheckLogin()) {
        return;
    }
    $.post(host + "/ajax/unfollow-user", { user_id: userid }, function (data) {
        if (data.code == 0) {
            if (callback) {
                callback();
            }
        }
    }, "json");
}

//用户页面
MPObject.User.Pages={};

//用户所关注的人的页面
MPObject.User.Pages.Following = function (user) {
    return "/user/" + user.id + "/following";
}

//关注的图包的页面
MPObject.User.Pages.FollowingPackage = function (user)
{
    return "/user/" + user.id + "/following/package";
}
//用户的粉丝的页面
MPObject.User.Pages.Follower = function (user) {
    return "/user/" + user.id + "/follower";
}

//用户图片的页面
MPObject.User.Pages.Image = function (user)
{
    return "/user/" + user.id + "/image";
}

//用户图包的页面
MPObject.User.Pages.Package = function (user)
{
    return "/user/" + user.id;
}

//用户个人主页
MPObject.User.Pages.Home = function (user)
{
    return "/user/" + user.id;
}

//用户赞的首页面
MPObject.User.Pages.Praise=function(user)
{
    return "/user/" + user.id + "/praise";
}
//用户赞的图包
MPObject.User.Pages.PraisePackage=function(user)
{
    return "/user/" + user.id + "/praise/package";
}