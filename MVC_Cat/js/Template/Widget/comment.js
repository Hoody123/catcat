/// <reference path="../../include.js" />

//此处data为comment类型的数据
MPTemplate.Widget.Comment = function (data,option) {
    var strVar = "";
    strVar += "<div class=\"comment\">";
    strVar += "<a class=\"avt\" href=\"{0}\">".Format(MPObject.User.Home(data.user));
    strVar += " <img src=\"{0}\" />".Format(MPObject.User.Avt(data.user));
    strVar += "<\/a>";
    strVar += "<a class=\"name\">{0}<\/a>".Format(MPObject.User.Name(data.user));
    strVar += "<div class=\"text\">{0}<\/div>".FormatNoEncode(mentionConvert(data.text, data.mentions))
    strVar += "<\/div>";
    return strVar;
}

function mentionConvert(text, mentions) {
    var str = "";
    var begin = 0;
    var end = 0;
    for (var i = 0; i < mentions.length; i++) {
        end = mentions[i].pos;
        str += text.substring(begin, end);
        begin = end++;
        end = end + mentions[i].len;
        str += "<a href=\"{0}\">".Format("/user/" + mentions[i].user_id);
        str = str + text.substring(begin, end) + "</a>";
        begin = end++;
    }
    if (end < text.length) {
        end = text.length;
        str += text.substring(begin, end);
    }
    return str;
}