/// <reference path="../../include.js" />

//user模板
MPTemplate.Widget.User = function (data, options)
{
    var strVar = "";
    strVar += "<div class=\"widget-user\">";
    strVar += "    <a class=\"avt\" href=\"/user/{0}\">".Format(data.id);
    strVar += "        <img src=\"{0}\" />".Format(MPObject.User.BigAvt(data));
    strVar += "    <\/a>";
    strVar += "    <a class=\"name\">{0}<\/a>".Format(MPObject.User.Name(data));
    strVar += "    <div class=\"counts\">";
    strVar += "        <a class=\"item\" href=\"{1}\">{0}图片<\/a>".Format(data.images_count, MPObject.User.Pages.Image(data));
    strVar += "        <a class=\"item\" href=\"{1}\">{0}图包<\/a>".Format(data.packages_count, MPObject.User.Pages.Package(data));
    strVar += "    <\/div>";
    strVar += "    <div class=\"actions {0}\" data-id=\"{1}\"><\/div>".Format(data.followed ? "unfollow" : "follow", data.id);
    strVar += "<\/div>";

    return strVar;
}

//user上的操作按钮
MPTemplate.Widget.User.Buttons = {};

//关注按钮(会根据data的状态自动生成关注或者取消关注)
MPTemplate.Widget.User.Buttons.Follow = function (data, options)
{
    if (options == null)
    {
        options = {};
    }
    return "<div class=\"{0} {4}\" data-id=\"{1}\" title=\"关注{2}\"></div>".Format(data.followed ? "user-unfollow" : "user-follow", data.id, data.name,options.class);
}