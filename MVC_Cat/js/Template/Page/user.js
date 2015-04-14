/// <reference path="../../include.js" />

MPTemplate.Page.User = function (data, options)
{
    var user = MPObject.User;
    var strVar = "";
    strVar += "<div class=\"widget-userinfo\">";
    strVar += "        <div class=\"inner\">";
    strVar += "            <div class=\"info\">";
    strVar += "                <img class=\"avt\" src=\"{0}\" />".Format(user.BigAvt(data));
    strVar += "                <div class=\"right\">";
    strVar += "                    <div class=\"username\">{0}<\/div>".Format(user.Name(data));
    strVar += "                <\/div>";
    strVar += "                <div class=\"clear\"><\/div>";
    strVar += "                <div class=\"actions\">";
    if (data.id != MPData.user.id)
    {
        strVar += MPTemplate.Widget.User.Buttons.Follow(data);
    }
    strVar += "                </div>";
    strVar += "            <\/div>";
    strVar += "            <div class=\"tabs\">";
    strVar += "                <a class=\"tab {1}\" href=\"{2}\">{0}图包<\/a>".Format(data.packages_count, MPData.sub1 == "" ? " on" : "", user.Pages.Home(data));
    strVar += "                <a class=\"tab {1}\" href=\"{2}\">{0}图片<\/a>".Format(data.images_count, MPData.sub1 == "image" ? " on" : "", user.Pages.Image(data));
    strVar += "                <a class=\"tab {1}\" href=\"{2}\">{0}赞<\/a>".Format(data.praise_count, MPData.sub1 == "praise" ? " on" : "", user.Pages.Praise(data));
    strVar += "                <a class=\"tab {2}\" href=\"{1}\">{0}关注<\/a>".Format(data.follows_count, user.Pages.Following(data),MPData.sub1 == "following" ? " on" : "");
    strVar += "                <a class=\"tab {2}\" href=\"{1}\">{0}粉丝<\/a>".Format(data.followers_count, user.Pages.Follower(data),MPData.sub1 == "follower" ? " on" : "");

    strVar += "            <\/div>";
    strVar += "        <\/div>";
    if (MPData.sub1 == "following")
    {
        strVar += "        <div class=\"outer\">";
        strVar += "            <div class=\"list\">";
        strVar += "                <a class=\"item{1}\" href=\"{0}\">用户<\/a>".Format(user.Pages.Following(data), MPData.sub2 == "" ? " on" : "");
        strVar += "                <a class=\"item{1}\" href=\"{0}\">图包<\/a>".Format(user.Pages.FollowingPackage(data), MPData.sub2 == "package" ? " on" : "");
        strVar += "            <\/div>";
        strVar += "        <\/div>        ";
    }
    //else if (MPData.sub1 == "praise")
    //{
    //    strVar += "        <div class=\"outer\">";
    //    strVar += "            <div class=\"list\">";
    //    strVar += "                <a class=\"item{1}\" href=\"{0}\">图片<\/a>".Format(user.Pages.Praise(data), MPData.sub2 == "" ? " on" : "");
    //    strVar += "                <a class=\"item{1}\" href=\"{0}\">图包<\/a>".Format(user.Pages.PraisePackage(data), MPData.sub2 == "package" ? " on" : "");
    //    strVar += "            <\/div>";
    //    strVar += "        <\/div>        ";
    //}
    strVar += "<div class=\"waterfall\"></div>"
    strVar += "    <\/div>";

    return strVar;
}