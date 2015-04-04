/// <reference path="../main.js" />
/// <reference path="../Format/User.js" />
MPWidget.PackageInfo = {};
MPWidget.PackageInfo.New=function(packageDetail)
{
    var strVar = "";
    strVar += "<div class=\"widget-packageinfo\">";
    strVar += "<div class=\"inner\">";
    strVar += "    <div class=\"bar1\">";
    strVar += "        <h1 class=\"title\">{0}<\/h1>".Format(packageDetail.title);
    strVar += "        <div class=\"action-btns\">";
    strVar += "            <div class=\"btn edit\" data-id=\"{0}\">编辑<\/div>".Format(packageDetail.id);
    strVar += "            <div class=\"btn organize\" data-id=\"{0}\">批量管理<\/div>".Format(packageDetail.id);
    strVar += "            <div class=\"btn follow\" data-id=\"{0}\">关注<\/div>".Format(packageDetail.id);
    strVar += "            <div class=\"btn praise\" data-id=\"{0}\">赞<\/div>".Format(packageDetail.id);
    strVar += "        <\/div>";
    strVar += "        <div class=\"clear\"><\/div>";
    strVar += "        <div class=\"description\">{0}<\/div>".Format(packageDetail.description);
    strVar += "    <\/div>";

    var fuser = MPFormat.User.New(packageDetail.user);
    strVar += "    <div class=\"bar2\">";
    strVar += "        <div class=\"user\">";
    strVar += "             <a href=\"{0}\"><img src=\"{1}\" /></a>".Format(fuser.Home(),fuser.Avt());
    strVar += "            <a class=\"user-name\" href=\"{0}\">{1}<\/a>".Format(fuser.Home(),fuser.Name());
    strVar += "        <\/div>";
    strVar += "        <div class=\"tabs\">";
    strVar += "            <div class=\"tab count\">{0}图片<\/div>".Format(packageDetail.imageCount);
    strVar += "            <div class=\"tab follower\">{0}人关注<\/div>".Format(packageDetail.followerCount);
    strVar += "        <\/div>";
    strVar += "    <\/div>";
    strVar += "    <\/div>";
    strVar += "     <div class=\"waterfall\"></div>";
    strVar += "<\/div>";

    var content = $(strVar);
    content.waterfall = MPWaterFall.New($(window), content.find(".waterfall"), 4, 236, 6, 6, 6, 6);

    return content;
}

MPWidget.PackageInfo.Bind = function () {
    $(document).on("click", ".widget-packageinfo .edit", edit_click)

    .on("click", ".widget-packageinfo .follow", follow_click)

    .on("click", ".widget-packageinfo .unfollow", unfollow_click);

    function edit_click() {
        //提取id
        var id = $(this).attr("data-id");
        location.href = "/package/" + id + "/edit";
        //跳转到编辑页
    }

    function follow_click() {
        var t = $(this);
        var id = t.attr("data-id");
        MPObject.Package.Follow(id, function () {
            t.removeClass("follow");
            t.addClass("unfollow");
            t.text("已关注");
            MPMessageBox.New(MPMessageBox.Icons.OK, "关注成功!");
        })
    }//关注操作

    function unfollow_hover() {
        $(this).text("取消关注");
    }//鼠标指到"已关注"按钮上,文本变成"取消关注"

    function unfollow_click() {
        var t = $(this);
        var box = MPMessageBox.New(MPMessageBox.Icons.Warn, "确认要取消关注?");
        box.onOK = function myfunction() {
            var id = t.attr("data-id");
            MPObject.Package.UnFollow(id, function () {
                t.removeClass("unfollow");
                t.addClass("follow");
                t.text("关注");
            })
        }
    }//取消关注
}