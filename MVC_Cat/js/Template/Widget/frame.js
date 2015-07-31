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
        var User = MPObject.User;
        //消息提示
        strVar += "<div class=\"nav notice-nav\">";        
        strVar += "    <div class=\"nav-link\" title=\"通知\">";
        strVar += "         <em class=\"count\"></em>";
        strVar += "    <\/div>";       
        strVar += "    <div class=\"hide-menu\">";
        strVar += "         <div class=\"triangle\"></div>";
        strVar += "         <ul>";
        strVar += "             <li id=\"message\" data-max=\"0\">消息</li>";
        strVar += "             <li id=\"activity\" data-max=\"0\">动态</li>";
        strVar += "         </ul>";
        strVar += "         <div class=\"clear\"></div>";
        strVar += "         <div class=\"content \">";
        strVar += "         </div>";
        strVar += "    </div>";
        strVar += "<\/div>";
        //用户按钮
        strVar += "<div class=\"nav add-nav\">";
        strVar += "    <div class=\"nav-link\" title=\"添加\">";
        strVar += "    <\/div>";
        strVar += "    <div class=\"hide-menu\"><\/div>";
        strVar += "<\/div>";
        strVar += "<div class=\"nav user-nav\">";
        strVar += "    <a class=\"nav-link\" href=\"{0}\">".Format(User.Pages.Home(MPData.user));
        strVar += "        <img class=\"avt\" src=\"{0}\" />".Format(User.Avt(MPData.user));
        strVar += "        <div class=\"arrow\"><\/div>";
        strVar += "    <\/a>";
        strVar += "    <div class=\"hide-menu\">";
        strVar += "        <a class=\"item\" href=\"{0}\">我的主页<\/a>".Format(User.Pages.Home(MPData.user));
        strVar += "        <div class=\"seperator\"><\/div>";
        strVar += "        <a class=\"item\" href=\"{0}\">我的关注<\/a>".Format(User.Pages.Following(MPData.user));
        strVar += "        <a class=\"item\" href=\"{0}\">我的粉丝<\/a>".Format(User.Pages.Follower(MPData.user));
        strVar += "        <div class=\"seperator\"><\/div>";
        strVar += "        <a class=\"item\" href=\"/setting\">设置<\/a>";
        strVar += "        <div class=\"item\" id=\"logout\">退出<\/div>";
        strVar += "    <\/div>";
        strVar += "<\/div>";
    }
    strVar += "                <\/div>";
    strVar += "            <\/div>";
    strVar += "        <\/div>";
    strVar += "    <\/div>";
    strVar += "    <div class=\"wrapper\">";
    strVar += "        <div class=\"body\"><\/div>";
    strVar += "    <\/div>";
    strVar += "    <div class=\"float-tools\">";
    strVar += "        <em class=\"top\" title=\"回到顶部\"><\/em>";
    strVar += "    <\/div>";
    strVar += "<\/div>";

    return strVar;
}