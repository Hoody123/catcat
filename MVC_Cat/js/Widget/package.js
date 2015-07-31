/// <reference path="../include.js" />

MPWidget.Package.New = function (packageDetail, type) {
    var res = $(MPTemplate.Widget.Package(packageDetail, type));
    return res;
}

MPWidget.Package.Bind = function () {
    //编辑点击(图包是自己时)
    $(document).on("click", ".widget-package .edit", edit_click)
        //点击关注
    .on("click", ".widget-package .follow", follow_click)
        //点击取消关注
    .on("click", ".widget-package .unfollow", unfollow_click);

    function edit_click() {
        //提取id
        var id = $(this).attr("data-id");
        var title = $(this).attr("data-title");
        var description = $(this).attr("data-description");
        MPObject.Package.Edit(id, title, description);
    }

    function follow_click() {
        var t = $(this);
        var id = t.attr("data-id");
        MPObject.Package.Follow(id, function () {
            t.removeClass("follow");
            t.addClass("unfollow");
            MPMessageBox.New(MPMessageBox.Icons.OK, "关注成功!");
        })
    }//关注操作

    function unfollow_click() {
        var t = $(this);
        var box = MPMessageBox.New(MPMessageBox.Icons.Warn, "确认要取消关注?");
        box.onOK = function myfunction() {
            var id = t.attr("data-id");
            MPObject.Package.UnFollow(id, function () {
                t.removeClass("unfollow");
                t.addClass("follow");
            })
        }
    }//取消关注
}