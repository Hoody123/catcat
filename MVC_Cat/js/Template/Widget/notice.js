/// <reference path="../../include.js" />
MPTemplate.Widget.Notice = {};

MPTemplate.Widget.Notice.Activity = function (data, options)
{
    str = "";
    switch (data.type)
    {
        case "praise":
            {
                var User = MPObject.User;
                var Package = MPObject.Package;
                var Image = MPObject.Image;
                str += "<div class=\"widget-notice\">";
                str += "    <a href=\"{0}\"><img class=\"avt\" src=\"{1}\"/></a>".Format(User.Pages.Home(data.user), User.Avt(data.user));
                str += "    <div class=\"r\">";
                str += "        <div class=\"line\">";
                str += "            <a class=\"username\" href=\"{0}\">{1}</a>".Format(User.Pages.Home(data.user), User.Name(data.user));
                str += "            <span>赞了你的图片</span>";
                str += "        </div>";
                str += "        <div class=\"line\">";
                str += "            <a class=\"image-description\" href=\"{0}\">{1}</a>".Format(host + "/image/" + data.image.id, data.image.description);
                str += "        </div>";
                str += "    </div>";
                str += "</div>";
            }
            break;
        case "resave":
            {
                var User = MPObject.User;
                var Image = MPObject.Image;
                str += "<div class=\"widget-notice\">";
                str += "    <a href=\"{0}\"><img class=\"avt\" src=\"{1}\"/></a>".Format(User.Pages.Home(data.user), User.Avt(data.user));
                str += "    <div class=\"r\">";
                str += "        <div class=\"line\">";
                str += "            <a class=\"username\" href=\"{0}\">{1}</a>".Format(User.Pages.Home(data.user), User.Name(data.user));
                str += "            <span>转存了你的</span>";
                str += "        </div>";
                str += "        <div class=\"line\">";
                str += "            <a class=\"image-description\" href=\"{0}\">{1}</a>".Format(host + "/image/" + data.image.id, data.image.description);
                str += "        </div>";
                str += "    </div>";
                str += "</div>";
            }
            break;
        case "follow_user":
            {
                var User = MPObject.User;
                var Package = MPObject.Package;
                var Image = MPObject.Image;
                str += "<div class=\"widget-notice\">";
                str += "    <a href=\"{0}\"><img class=\"avt\" src=\"{1}\"/></a>".Format(User.Pages.Home(data.user), User.Avt(data.user));
                str += "    <div class=\"r\">";
                str += "        <div class=\"line\">";
                str += "            <a class=\"username\" href=\"{0}\">{1}</a>".Format(User.Pages.Home(data.user), User.Name(data.user));
                str += "            <span>关注了你</span>";
                str += "        </div>";
                str += "        <div class=\"line\">";
                str += "        </div>";
                str += "    </div>";
                str += "</div>";
            }
            break;
        case "follow_package":
            {
                var User = MPObject.User;
                var Package = MPObject.Package;
                var Image = MPObject.Image;
                str += "<div class=\"widget-notice\">";
                str += "    <a href=\"{0}\"><img class=\"avt\" src=\"{1}\"/></a>".Format(User.Pages.Home(data.user), User.Avt(data.user));
                str += "    <div class=\"r\">";
                str += "        <div class=\"line\">";
                str += "            <a class=\"username\" href=\"{0}\">{1}</a>".Format(User.Pages.Home(data.user), User.Name(data.user));
                str += "            <span>关注了你的图包</span>";
                str += "        </div>";
                str += "        <div class=\"line\">";
                str += "            <a class=\"package-title\" href=\"{0}\">{1}</a>".Format(host + "/package/" + data.package.id, data.package.title);
                str += "        </div>";
                str += "    </div>";
                str += "</div>";
            }
            break;
        case "resave_through":
            {
                var User = MPObject.User;
                var Package = MPObject.Package;
                var Image = MPObject.Image;
                str += "<div class=\"widget-notice\">";
                str += "    <a href=\"{0}\"><img class=\"avt\" src=\"{1}\"/></a>".Format(User.Pages.Home(data.user), User.Avt(data.user));
                str += "    <div class=\"r\">";
                str += "        <div class=\"line\">";
                str += "            <a class=\"username\" href=\"{0}\">{1}</a>".Format(User.Pages.Home(data.user), User.Name(data.user));
                str += "            <span>通过</span>";
                str += "            <a class=\"package-title\" href=\"{0}\">{1}</a>".Format(host + "/package/" + data.package.id, data.package.title);
                str += "            <span>转存了</span>";
                str += "        </div>";
                str += "        <div class=\"line\">";
                str += "            <a class=\"image-description\" href=\"{0}\">{1}</a>".Format(host + "/image/" + data.image.id, data.image.description);
                str += "        </div>";
                str += "    </div>";
                str += "</div>";
            }
            break;
    }

    return str;
}

MPTemplate.Widget.Notice.Message=function(data,options)
{
    str = "";
    switch (data.type)
    {
        case "comment":
            {
                var User = MPObject.User;
                var Package = MPObject.Package;
                var Image = MPObject.Image;
                str += "<div class=\"widget-notice\">";
                str += "    <a href=\"{0}\"><img class=\"avt\" src=\"{1}\"/></a>".Format(User.Pages.Home(data.user), User.Avt(data.user));
                str += "    <div class=\"r\">";
                str += "        <div class=\"line\">";
                str += "            <a class=\"username\" href=\"{0}\">{1}</a>".Format(User.Pages.Home(data.user), User.Name(data.user));
                str += "            <span>对你的图片</span>";
                str += "            <a class=\"image-description\" href=\"{0}\">{1}</a>".Format(host + "/image/" + data.image.id, data.image.description);
                str += "            <span>作出了评价</span>";
                str += "        </div>";
                str += "        <div class=\"line\">";
                str += "            <span>{0}</span>".Format(data.comment);
                str += "        </div>";
                str += "    </div>";
                str += "</div>";
            }
            break;
        case "mention":
            {
                var User = MPObject.User;
                var Package = MPObject.Package;
                var Image = MPObject.Image;
                str += "<div class=\"widget-notice\">";
                str += "    <a href=\"{0}\"><img class=\"avt\" src=\"{1}\"/></a>".Format(User.Pages.Home(data.user), User.Avt(data.user));
                str += "    <div class=\"r\">";
                str += "        <div class=\"line\">";
                str += "            <a class=\"username\" href=\"{0}\">{1}</a>".Format(User.Pages.Home(data.user), User.Name(data.user));
                str += "            <span>在评论</span>";
                str += "            <a class=\"image-description\" href=\"{0}\">{1}</a>".Format(host + "/image/" + data.image.id, data.image.description);
                str += "            <span>时提到了你</span>";
                str += "        </div>";
                str += "        <div class=\"line\">";
                str += "            <span>{0}</span>".Format(data.comment);
                str += "        </div>";
                str += "    </div>";
                str += "</div>";
            }
            break;
        case "reply":
            {
                var User = MPObject.User;
                var Package = MPObject.Package;
                var Image = MPObject.Image;
                str += "<div class=\"widget-notice\">";
                str += "    <a href=\"{0}\"><img class=\"avt\" src=\"{1}\"/></a>".Format(User.Pages.Home(data.user), User.Avt(data.user));
                str += "    <div class=\"r\">";
                str += "        <div class=\"line\">";
                str += "            <a class=\"username\" href=\"{0}\">{1}</a>".Format(User.Pages.Home(data.user), User.Name(data.user));
                str += "            <span>在</span>";
                str += "            <a class=\"image-description\" href=\"{0}\">{1}</a>".Format(host + "/image/" + data.image.id, data.image.description);
                str += "            <span>回复了你</span>";
                str += "        </div>";
                str += "        <div class=\"line\">";
                str += "            <span>{0}</span>".Format(data.comment);
                str += "        </div>";
                str += "    </div>";
                str += "</div>";
            }
            break;
    }
    return str;
}