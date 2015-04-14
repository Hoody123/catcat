/// <reference path="../include.js" />

MPWidget.UserInfo = {};
MPWidget.UserInfo.New = function ()
{
    var content = $(MPTemplate.Page.User(MPData.page_user));
    content.waterfall = MPWaterFall.New($(window), content.find(".waterfall"), 4, 236, 6, 6, 6, 6);
    return content;
}

MPWidget.UserInfo.Bind = function () {
    $(document).on("click", ".widget-userinfo .user-follow", follow_click)
    .on("click", ".widget-userinfo .user-unfollow", unfollow_click);

    //关注用户
    function follow_click() {
        var t = $(this);
        var id = t.attr("data-id");
        MPObject.User.Actions.Follow(id, function () {
            t.removeClass("user-follow");
            t.addClass("user-unfollow");
        })
    }

    //取消关注用户
    function unfollow_click() {
        var t = $(this);
        var id = t.attr("data-id");
        MPObject.User.Actions.UnFollow(id, function () {
            t.removeClass("user-unfollow");
            t.addClass("user-follow");
        })
    }
}