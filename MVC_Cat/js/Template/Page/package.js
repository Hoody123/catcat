/// <reference path="../../include.js" />

MPTemplate.Page.Package = function (data, options)
{
    var strVar = "";
    strVar += "<div class=\"page-package\">";
    strVar += "<div class=\"inner\">";
    strVar += "    <div class=\"bar1\">";
    strVar += "        <h1 class=\"title\">{0}<\/h1>".Format(data.title);
    strVar += "        <div class=\"action-btns\">";    
    if (data.user.id != MPData.user.id)
    {
        strVar += MPTemplate.Widget.Package.Buttons.Follow(data, { "class": "btn" });
    }
    else
    {
        strVar += MPTemplate.Widget.Package.Buttons.Edit(data, { "class": "btn" });
    }
    strVar += "        <\/div>";
    strVar += "        <div class=\"clear\"><\/div>";
    strVar += "        <div class=\"description\">{0}<\/div>".Format(data.description);
    strVar += "    <\/div>";

    var User = MPObject.User;
    strVar += "    <div class=\"bar2\">";
    strVar += "        <div class=\"user\">";
    strVar += "             <a href=\"{0}\"><img src=\"{1}\" /></a>".Format(User.Pages.Home(data.user), User.Avt(data.user));
    strVar += "            <a class=\"user-name\" href=\"{0}\">{1}<\/a>".Format(User.Pages.Home(data.user),User.Name(data.user));
    strVar += "        <\/div>";
    strVar += "        <div class=\"tabs\">";
    strVar += "            <div class=\"tab count\">{0}图片<\/div>".Format(data.imageCount);
    strVar += "            <div class=\"tab follower\">{0}人关注<\/div>".Format(data.followerCount);
    strVar += "        <\/div>";
    strVar += "    <\/div>";
    strVar += "    <\/div>";
    strVar += "     <div class=\"waterfall\"></div>";
    strVar += "<\/div>";

    return strVar;
}