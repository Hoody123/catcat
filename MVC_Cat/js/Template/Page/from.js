/// <reference path="../../include.js" />

MPTemplate.Page.From = function (data, options)
{
    var strVar = "";
    strVar += "<div class=\"page-from\">";
    strVar += "    <h1>来自{0}的图片<\/h1>".Format(MPData.host);
    strVar += "    <div class=\"waterfall\"><\/div>";
    strVar += "<\/div>";
    return strVar;
}
