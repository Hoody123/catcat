/// <reference path="../include.js" />

MPWidget.ImageView = {};
MPWidget.ImageView.New = function (imageDetail)
{  
    var res = $(MPTemplate.Widget.ImageView(imageDetail));
    res.Run = function ()
    {
        var wf = MPWaterFall.New(res.find(".images"), res.find(".image-waterfall"), 3, 76, 1, 1, 1, 1,false);
        var max = 0;
        wf.onBottom = function ()
        {
            wf.BeginUpdate();
            $.getJSON("/package/" + imageDetail.package.id, { ajax: true, simple: true, max: max }, function (data)
            {
                max = wf.Push(data, ImageItem, null, "id");
                wf.EndUpdate();
            })
        };
        wf.onBottom();

        var ad = res.find(".ad-piece.piece");
        ad.append(MPPage.ad);
    }

    var ImageItem = {};
    ImageItem.New = function (image)
    {
        var strVar1 = "";
        strVar1 += "<a class=\"image\" href=\"{0}\" data-id=\"{1}\">".Format("/image/" + image.id, image.id);
        strVar1 += "     <img src=\"{0}\" width=\"76\" height=\"{1}\"/>".Format(imageHost + "/" + image.file.hash + "_fw78", Math.ceil(76 * image.file.height / image.file.width));
        strVar1 += "     <div class=\"cover\"><\/div>";
        strVar1 += "<\/a>";

        return $(strVar1);
    }

    return res;
}

MPWidget.ImageView.Bind = function () {
    //转存按钮
    $(document).on("click", ".image-view .resave", resave_click)
    //编辑按钮
    .on("click", ".image-view .edit", edit_click)
    //删除按钮
    .on("click", ".image-view .delete", delete_click)
    //添加评论
    .on("click", ".image-view .submit", submit_click);

    function resave_click() {
        var t = $(this);
        var id = t.attr("data-id");
        var hash = t.attr("data-hash");
       //待处理
        MPObject.Image.Resave(id, hash);
    }

    function edit_click() {
        var t=$(this);
        var id = t.attr("data-id");
        var hash = t.attr("data-hash");
        MPObject.Image.Edit(id, hash);
    }

    function delete_click() {
        var id = $(this).attr("data-id");
        MPObject.Image.Delete(id);
    }

    function submit_click() {
        var id = $(".image-view .resave").attr("data-id");
        var text = $(".new-comment textarea").val();//评论内容
        if ($.trim(text) == "") {
            MPMessageBox.New(MPMessageBox.Icons.OK, "请输入评论内容");
            return;
        }
        $.post(host + "/ajax/add-comment", { text: text, image_id: id }, function (data) {
            if (data.code == 0) {
                var fuser2 = MPFormat.User.New(MPData.user);
                var strVar = "";
                strVar += "<div class=\"comment\">";
                strVar += "<a class=\"avt\" href=\"{0}\">".Format(fuser2.Home());
                strVar += "<img src=\"{0}\" />".Format(fuser2.Avt());
                strVar += "<\/a>";
                strVar += "<a class=\"name\">{0}<\/a>".Format(fuser2.Name());
                strVar += "<div class=\"text\">{0}<\/div>".FormatNoEncode(mentionConvert(data.comment.text, data.comment.mentions));
                strVar += "<\/div>";
                var a = $(".image-view .comments");
                a.prepend($(strVar));
                //成功的处理
            }
            else {
                MPMessageBox.New(MPMessageBox.Icons.Error, data.mag);
            }
        }, "json");
    }
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
    if (end<text.length) {
        end = text.length - 1;
        str += text.substring(begin, end);
    }
    return str;
}