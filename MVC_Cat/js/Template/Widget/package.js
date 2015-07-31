/// <reference path="../../include.js" />

MPTemplate.Widget.Package = function (data, options)
{
    options = options ? options : MPTemplate.Widget.Package.Options.BigButton;
    var strVar = "";
    strVar += "<div class=\"widget-package\">";
    strVar += "    <a class=\"previews\" href=\"{0}\">".Format(host + "/package/" + data.id);
    if (data.thumbs.length != 0)
    {
        strVar += "        <div class=\"thumbs\">";
        var n = data.thumbs.length;
        for (var i = 0; i < n; i++)
        {
            if (i == 0)
            {
                strVar += " <img class=\"cover\" src=\"{0}\" />".Format(MPObject.Image.sq236(data.thumbs[i]).url);
            }
            else
            {
                strVar += " <img class=\"thumb\" src=\"{0}\" />".Format(MPObject.Image.sq75(data.thumbs[i]).url);
            }
        }
        strVar += "        <\/div>";
    }
    strVar += "        <div class=\"borders\">";
    strVar += "            <div class=\"cover-border\"><\/div>";
    strVar += "            <div class=\"thumb-border\"><\/div>";
    strVar += "            <div class=\"thumb-border\"><\/div>";
    strVar += "            <div class=\"thumb-border\"><\/div>";
    strVar += "        <\/div>";
    if (data.imageCount != 0)
    {
        strVar += "        <div class=\"count\">{0}<\/div>".Format(data.imageCount);
    }
    strVar += "        <div class=\"over{0}\">".Format(data.thumbs.length == 0 ? " empty-package" : "");
    strVar += "            <h3>{0}<\/h3>".Format(data.title);
    strVar += "            <h4>{0}<\/h4>".Format(data.description);
    strVar += "        <\/div>";
    strVar += "    <\/a>";

    var fuser = MPFormat.User.New(data.user);
    strVar += "    <div class=\"actions\">";
    if (data.user.id == MPData.user.id)
    {
        strVar += "<div class=\"btn2 edit\" data-id=\"{0}\" data-title=\"{1}\" data-description=\"{2}\"><\/div>".Format(data.id,data.title,data.description);
    }
    else
    {
        switch (options)
        {
            case MPTemplate.Widget.Package.Options.SmallButton:
                strVar += "        <a class=\"avt\" href=\"{0}\">".Format(fuser.Home());
                strVar += "            <img src=\"{0}\" />".Format(fuser.Avt());
                strVar += "        <\/a>";
                strVar += "        <a class=\"username\" href=\"{0}\" >{1}<\/a>".Format(fuser.Home(), fuser.Name);
                if (data.followed === true)
                {
                    strVar += "        <div class=\"btn unfollow\" data-id=\"{0}\"><\/div>".Format(data.id);
                }
                else
                {
                    strVar += "        <div class=\"btn follow\" data-id=\"{0}\"><\/div>".Format(data.id);
                }
                break;
            case MPTemplate.Widget.Package.Options.BigButton:
                if (data.followed == true)
                {
                    strVar += "        <div class=\"btn2 unfollow\" data-id=\"{0}\"><\/div>".Format(data.id);
                }
                else
                {
                    strVar += "        <div class=\"btn2 follow\" data-id=\"{0}\"><\/div>".Format(data.id);
                }
                break;
        }
    }
    strVar += "<\/div>";

    return strVar;
}

MPTemplate.Widget.Package.Options = {
    SmallButton: 0,
    BigButton: 1
};

MPTemplate.Widget.Package.Buttons = {};

MPTemplate.Widget.Package.Buttons.Edit = function (data, options)
{
    if (options == null)
        options = {};
    var str = "<div class=\"package-edit {0}\" data-id=\"{1}\" data-title=\"{2}\" data-description=\"{4}\">编辑</div>".Format(options.class, data.id, data.title, data.description);
    return str;
}

MPTemplate.Widget.Package.Buttons.Follow = function (data, options)
{
    if (options == null)
        options = {};
    var cls = data.followed == true ? "package-unfollow" : "package-follow";
    var title = data.followed == true ? "取消关注" : "关注";
    var str = "<div class=\"{0} {1}\" data-id=\"{2}\" title=\"{3}\"></div>".Format(cls, options.class, data.id, title);
    return str;
}

MPTemplate.Widget.Package.Buttons.Praise = function (data, options)
{
    if (options == null)
        options = {};
    var cls = data.praised == true ? "package-unpraise" : "package-praise";
    var title = data.praised == true ? "取消赞" : "赞";
    var str = "<div class=\"{0} {1}\" data-id=\"{2}\" title=\"{3}\"></div>".Format(cls, options.class, data.id, title);
    return str;
}