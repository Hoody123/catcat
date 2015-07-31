/// <reference path="../../include.js" />

MPTemplate.Widget.Add = function (data, options)
{
    var strVar = "";
    strVar += "<div class=\"widget-add\" data-id=\"{0}\">".Format(data.id);
    strVar += "    <div class=\"border {0}\">".Format(options.class);
    strVar += "        <em><\/em>";
    strVar += "        <span>{0}<\/span>".Format(options.text);
    strVar += "    <\/div>";
    strVar += "<\/div>";

    return strVar;
}

MPTemplate.Widget.Add.Options = {
    AddPackage: {
        "class": "package",
        "text": "创建图包"
    },
    AddImage: {
        "class": "image",
        "text": "添加图片"
    }
}