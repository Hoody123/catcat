/// <reference path="../include.js" />

MPWidget.ImageView = {};
MPWidget.ImageView.New = function (imageDetail)
{
    var res = $(MPTemplate.Widget.ImageView(imageDetail));
    res.Run = function ()
    {
        //缩略图瀑布流处理
        var wf = MPWaterFall.New(res.find(".images"), res.find(".image-waterfall"), 3, 76, 1, 1, 1, 1, false);
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
        //广告处理
        var ad = res.find(".ad-piece.piece");
        ad.append(MPPage.ad);
        //更多来自同一个网站的图片处理
        if (imageDetail.host != "")
        {
            $.getJSON("/from/" + imageDetail.host, { ajax: true, limit: 3 })
            .success(function (data)
            {
                var n = data.length;
                if (n != 0)
                {
                    res.find(".from-piece").show();
                    res.find(".from-piece .host").text(imageDetail.host);
                    var thumbs = res.find(".from-piece .thumbs");
                    thumbs.empty();
                    for (var i = 0; i < n; i++)
                    {
                        var thumb = "<img src=\"{0}\" class=\"thumb\"/>".Format(MPObject.Image.sq236(data[i]).url);
                        thumbs.append(thumb);
                    }
                }
            });
        }
    }

    var ImageItem = {};
    ImageItem.New = function (image)
    {
        var strVar1 = "";
        strVar1 += "<a class=\"image\" href=\"{0}\" data-id=\"{1}\">".Format("/image/" + image.id, image.id);
        var img = MPObject.Image.fw78(image);
        strVar1 += "     <img src=\"{0}\" width=\"76\" height=\"{1}\"/>".Format(img.url, img.height);
        strVar1 += "     <div class=\"cover\"><\/div>";
        strVar1 += "<\/a>";

        return $(strVar1);
    }

    return res;
}

MPWidget.ImageView.Bind = function ()
{
    //转存按钮
    $(document).on("click", ".image-view .resave", resave_click)
    //编辑按钮
    .on("click", ".image-view .edit", edit_click)
    //删除按钮
    .on("click", ".image-view .delete", delete_click)
    //添加评论
    .on("click", ".image-view .submit", submit_click)
    //监听键盘输入,主要针对@的使用
    .on("keydown", ".new-comment textarea", keydown)
    //点击@人
    .on("click", ".mention-option", mention_click)
     //赞图片
    .on("click", ".image-view .image-praise", praise_click)
    //取消赞图片
    .on("click", ".image-view .image-unpraise", unpraise_click)
    //查看大图
    .on("click", ".image-view .big", big_click);
    function praise_click()
    {
        var t = $(this);
        var id = t.attr("data-id");
        MPObject.Image.Praise(id, function ()
        {
            t.removeClass("image-praise ");
            t.addClass("image-unpraise");
        })
    }

    function unpraise_click()
    {
        var t = $(this);
        var id = t.attr("data-id");
        MPObject.Image.UnPraise(id, function ()
        {
            t.removeClass("image-unpraise");
            t.addClass("image-praise ");
        })
    }

    function resave_click()
    {
        var t = $(this);
        var id = t.attr("data-id");
        var hash = t.attr("data-hash");
        var description = t.attr("data-description");
        //待处理
        MPObject.Image.Resave(id, hash, description);
    }

    function edit_click()
    {
        var t = $(this);
        var id = t.attr("data-id");
        var hash = t.attr("data-hash");
        var packageID = t.attr("data-packageid");
        var packagetitle = t.attr("data-packagetitle");
        var description = t.attr("data-description");
        var sourve = t.attr("data-source");
        MPObject.Image.Edit(id, hash, description, sourve, packageID, packagetitle);
    }

    function delete_click()
    {
        var id = $(this).attr("data-id");
        MPObject.Image.Delete(id);
    }

    function submit_click()
    {
        var id = $(".image-view .resave").attr("data-id");
        var text = $(".new-comment textarea");//评论内容
        if ($.trim(text.val()) == "")
        {
            MPMessageBox.New(MPMessageBox.Icons.Warn, "请输入评论内容");
            return;
        }
        $.post(host + "/ajax/add-comment", { text: MPHtmlEncode(text.val()), image_id: id }, function (data)
        {
            if (data.code == 0)
            {
                //成功的处理
                $(".image-view .comments").prepend($(MPTemplate.Widget.Comment(data.comment)));
                text.val("");
            }
            else
            {
                MPMessageBox.New(MPMessageBox.Icons.Error, data.mag);
            }
        }, "json");
    }

    function keydown(e)
    {
        if (e.keyCode == 50 && e.shiftKey)
        {
            $.post(host + "/ajax/get-following-user", {}, function (data)
            {
                if (data.code == 0)
                {
                    var folUserList = data.users;
                    var container = $("<div/>").addClass("mention-container ");
                    if (folUserList.length == 0)
                        return;
                    for (var i = 0; i < folUserList.length; i++)
                    {
                        var option = $("<div/>").addClass("mention-option");
                        option.text(folUserList[i].name);
                        container.append(option);
                    }
                    var t = $(".new-comment textarea").position().top;
                    var l = $(".new-comment textarea").position().left
                    var position = $(".new-comment textarea").caret("position");
                    container.offset({ left: position.left + l + 2, top: position.top + t + 1 });
                    $(".new-comment").append(container);

                    $(document).click(function (e)
                    {
                        var point = {};
                        point.X = e.clientX;
                        point.Y = e.clientY;
                        if (!MPCheckInEle(container, point))
                        {
                            container.remove();
                        }
                    })

                    $(document).keydown(function (e)
                    {
                        container.remove();
                    })
                }
            }, "json");
        }
    }

    function mention_click()
    {
        var aText = $(this).text() + " ";
        var oText = $(".new-comment textarea").val();
        $(".new-comment textarea").val(oText + aText);
        $(".new-comment .mention-container").remove();
    }

    function big_click()
    {
        var e = $(this);
        var id = e.attr("data-id");
        //var url = e.attr("data-url");
        //var width = e.attr("data-width");
        //var height = e.attr("data-height");
        open(host+"/image/"+id+"/big")
        //var w = open("", "_blank");
        //var strVar = "";
        //strVar += "<html>";
        //strVar += "<head>";
        //strVar += "    <title>查看大图<\/title>";
        //strVar += "<\/head>";
        //strVar += "<body>";
        //strVar += "    <img  src=\"{0}\" />".Format(url);
        //strVar += "<\/body>";
        //strVar += "<\/html>";
        //w.document.write(strVar);
    }
}
