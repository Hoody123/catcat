/// <reference path="../../include.js" />

MPTemplate.Dialog.AvtCutDialog = function (data, options)
{
    var img = { file: data };
    var strVar = "";
    strVar += "<div class=\"dialog-mask\">";
    strVar += "    <div class=\"dialog-box\">";
    strVar += "        <div class=\"dialog-title\">";
    strVar += "            <span class=\"text\">图片裁剪<\/span>";
    strVar += "            <div class=\"dialog-close\"><\/div>";
    strVar += "        <\/div>";
    strVar += "        <div class=\"dialog-content\">";
    strVar += "            <div class=\"crop-dialog\">";
    var scaleX = 400 / data.width;
    var scaleY = 300 / data.height;
    if (scaleX > 1)
        scaleX = 1;
    if (scaleY > 1)
        scaleY = 1;
    var scale = scaleX > scaleY ? scaleY : scaleX;

    var w = Math.ceil(data.width * scale);
    var h = Math.ceil(data.height * scale);

    strVar += "                <div class=\"img\" style=\"left:{0}px;top:{1}px;height:{2}px;width:{3}px\">".Format(Math.ceil((400 - w) / 2), Math.ceil((300 - h) / 2),h,w);
    strVar += "                    <img class=\"main\" src=\"{0}\" width=\"{1}\" height=\"{2}\"/>".Format(MPObject.Image.fw658(img).url,w,h);
    strVar += "                <\/div>";
    strVar += "                <div class=\"previews\">";
    strVar += "                    <div class=\"big\">";
    strVar += "                        <img src=\"{0}\" />".Format(MPObject.Image.fw658(img).url);
    strVar += "                    <\/div>";
    strVar += "                    <div class=\"normal\">";
    strVar += "                        <img src=\"{0}\"/>".Format(MPObject.Image.fw658(img).url);
    strVar += "                    <\/div>";
    strVar += "                <\/div>";
    strVar += "                <div class=\"clear\"></div>";
    strVar += "            <\/div>";
    strVar += "        <\/div>";
    strVar += "        <div class=\"dialog-btns\">";
    strVar += "            <div class=\"ok\">确认<\/div>";
    strVar += "            <div class=\"cancel\">取消<\/div>";
    strVar += "        <\/div>";
    strVar += "    <\/div>";
    strVar += "<\/div>";

    return strVar;
}