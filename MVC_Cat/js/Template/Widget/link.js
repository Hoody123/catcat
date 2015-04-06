/// <reference path="../../include.js" />
MPTemplate.Widget.Link = function (data,options)
{
    var type;
    if (data.indexOf("http://") == 0)
        type = { type: "link", text: "网页链接" };
    else if (data.indexOf("magnet:?xt=urn:btih:") == 0)
        type = { type: "magnet", text: "磁力链" };
    var strVar = "";
    strVar += "<a class=\"widget-link\" href=\"{0}\">".Format(data);
    strVar += "    <div class=\"icon {0}\"><\/div>".Format(type.type);
    strVar += "    <div class=\"text\">{0}<\/div>".Format(type.text);
    strVar += "<\/a>";
}