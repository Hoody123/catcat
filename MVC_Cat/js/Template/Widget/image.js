/// <reference path="../../include.js" />

MPTemplate.Widget.Image = function (data, options)
{
    options = options ? options : MPTemplate.Widget.Image.Options.ShowUser;
    var fuser = MPFormat.User.New(data.user);
    var strVar = "";
    strVar += "<div class=\"widget-image\" data-id=\"{0}\">".Format(data.id);
    strVar += "    <div class=\"actions\">";
    strVar += "         <div class=\"left\">";
    strVar += "             <div class=\"resave\" title=\"转存到我的图包\" data-id=\"{0}\" data-hash=\"{1}\" data-description=\"{2}\">转存<\/div>".Format(data.id, data.file.hash, data.description);
    strVar += "         <\/div>";
    if (data.user.id == MPData.user.id)
    {
        strVar += "<div class=\"right\">";
        strVar += "    <div class=\"edit\" title=\"编辑\" data-id=\"{0}\" data-hash=\"{1}\" data-description=\"{2}\" data-packageid=\"{3}\" data-source=\"{4}\" data-packagetitle=\"{5}\" >编辑<\/div>".Format(data.id, data.file.hash, data.description, data.package.id, data.source, data.package.title);
        strVar += "<\/div>";
    }
    else
    {
        strVar += "<div class=\"right\">";
        var cls, title;
        if (data.praised == true)
        {
            cls = "unpraise";
            title = "取消赞";
        }
        else
        {
            cls = "praise";
            title = "赞";
        }
        strVar += "    <div class=\"{0}\" title=\"{1}\" data-id=\"{2}\" ><em></em><\/div>".Format(cls,title,data.id);
        strVar += "<\/div>";
    }
    strVar += "    <\/div>";
    strVar += "    <a class=\"img\" href=\"{0}\">".Format("/image/" + data.id);
    var img = MPObject.Image.fw236(data);
    strVar += "        <img src=\"{0}\" width=\"236\" height=\"{1}\" />".Format(img.url,img.height);
    strVar += "        <div class=\"cover\"><\/div>";
    strVar += "    <\/a>";
    strVar += "    <div class=\"description\">{0}<\/div>".FormatNoEncode(MPWidget.Image.Description(data.description));
    if (data.resave_count != 0 || data.praise_count != 0)
    {
        strVar += "    <div class=\"count\">";
        if (data.resave_count != 0)
        {
            strVar += "         <span title=\"{0}人转存了这张图片\">".Format(data.resave_count);
            strVar += "             <em class=\"resave\"></em>";
            strVar += "             <span>{0}</span>".Format(data.resave_count);
            strVar += "         </span>";
        }
        if (data.praise_count != 0)
        {
            strVar += "         <span title=\"{0}人赞过这张图片\">".Format(data.praise_count);
            strVar += "             <em class=\"praise\"></em>";
            strVar += "             <span>{0}</span>".Format(data.praise_count);
            strVar += "         </span>";
        }
        strVar += "    </div>";
    }
    strVar += "    <div class=\"info\">";
    if (options == MPTemplate.Widget.Image.Options.ShowUser)
    {
        strVar += "        <a class=\"avt\" href=\"{0}\">".Format(fuser.Home());
        strVar += "            <img src=\"{0}\" />".Format(fuser.Avt());
        strVar += "        <\/a>";
        strVar += "        <div class=\"text\">";
        strVar += "            <div class=\"line\"><a class=\"user-name\" href=\"{0}\">{1}<\/a><span>收集到<\/span><\/div>".Format(fuser.Home(), fuser.Name());
        strVar += "            <div class=\"line\"><a class=\"package-title\" href=\"{0}\">{1}<\/a><\/div>".Format("/package/" + data.package.id, data.package.title);
        strVar += "        <\/div>";
    }
    else if (options == MPTemplate.Widget.Image.Options.ShowSource)
    {
        strVar += "<a class=\"source\" href=\"/from/{0}\">{0}<\/a>".Format(data.host);
    }
    strVar += "    <\/div>";
    strVar += "<\/div>";

    return strVar;
}

MPTemplate.Widget.Image.Options = {
    ShowUser: 0,
    ShowSource: 1
};