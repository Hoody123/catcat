/// <reference path="../../include.js" />

MPTemplate.Widget.Frame = function ()
{
    var strVar = "";
    strVar += "<div class=\"widget-frame\">";
    strVar += "    <div class=\"header\">";
    strVar += "        <div class=\"wrapper\">";
    strVar += "            <div class=\"menu-bar\">";
    strVar += "                <div class=\"left\">";
    strVar += "                    <div class=\"nav home-nav\">";
    strVar += "                        <a class=\"nav-link\" href=\"{0}\">主页<\/a>".Format(host);
    strVar += "                    <\/div>";
    strVar += "                    <div class=\"nav search\"><\/div>";
    strVar += "                <\/div>";
    strVar += "                <div class=\"right\">";
    if (MPData.user.id == 0)
    {
        strVar += "<div id=\"login\">登录</div>";
        strVar += "<div id=\"signup\">注册</div>";
    }
    else
    {
        strVar1 = "";
        strVar1 += "<div class=\"nav add-nav\">";
        strVar1 += "    <div class=\"nav-link\" title=\"添加\">";
        strVar1 += "    <\/div>";
        strVar1 += "    <div class=\"hide-menu\"><\/div>";
        strVar1 += "<\/div>";
        strVar1 += "<div class=\"nav user-nav\">";
        strVar1 += "    <a class=\"nav-link\" href=\"{0}\">";
        strVar1 += "        <img class=\"avt\" src=\"{1}\" />";
        strVar1 += "        <div class=\"arrow\"><\/div>";
        strVar1 += "    <\/a>";
        strVar1 += "    <div class=\"hide-menu\">";
        strVar1 += "        <a class=\"item\" href=\"{0}\">我的主页<\/a>";
        strVar1 += "        <div class=\"seperator\"><\/div>";
        strVar1 += "        <a class=\"item\" href=\"{2}\">我的关注<\/a>";
        strVar1 += "        <a class=\"item\" href=\"{3}\">我的粉丝<\/a>";
        strVar1 += "        <div class=\"seperator\"><\/div>";
        strVar1 += "        <a class=\"item\" href=\"/setting\">设置<\/a>";
        strVar1 += "        <div class=\"item\" id=\"logout\">退出<\/div>";
        strVar1 += "    <\/div>";
        strVar1 += "<\/div>";

        var fuser = MPFormat.User.New(MPData.user);
        strVar += strVar1.Format(fuser.Home(), fuser.Avt(), fuser.Following(), fuser.Follower());
    }
    strVar += "                <\/div>";
    strVar += "            <\/div>";
    strVar += "        <\/div>";
    strVar += "    <\/div>";
    strVar += "    <div class=\"wrapper\">";
    strVar += "        <div class=\"body\"><\/div>";
    strVar += "    <\/div>";
    strVar += "<\/div>";

    return strVar;
}