/// <reference path="../include.js" />


MPWidget.User = {};
MPWidget.User.New = function (userDetail) {
    var content = $(MPTemplate.Widget.User(userDetail));
    return content;
}

MPWidget.User.Bind = function () {
    $(document).on("click", ".widget-user .follow", follow_click)
    //关注用户
    .on("click", "widget-user .unfollow", unfollow_click);
    //点击取消关注;

    function follow_click() {
        var t = $(this);
        var id = t.attr("data-id");
        MPObject.User.Actions.Follow(id, function () {
            t.removeClass("follow");
            t.addClass("unfollow");
        });
    }

    function unfollow_click() {
        var t = $(this);
        var id = t.attr("data-id");
        MPObject.User.Actions.UnFollow(id, function () {
            t.removeClass("unfollow");
            t.addClass("follow");
        })
    }
}