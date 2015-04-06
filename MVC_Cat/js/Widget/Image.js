/// <reference path="../include.js" />

MPWidget.Image.Description = function (description)
{
    description = MPHtmlEncode(description);
    return description.replace(/(#.*#)/g, function (word)
    {
        var w = $.trim(word.substring(1, word.length - 1));
        if (w == "")
            return word;

        return "<a href=\"/search/{0}\">{1}</a>".FormatNoEncode(encodeURIComponent(w), word);
    });
};
MPWidget.Image.New = function (image,options)
{
    return $(MPTemplate.Widget.Image(image,options));
};
MPWidget.Image.Bind = function ()
{
    //点击编辑按钮
    $(document).on("click", ".widget-image .edit", edit_click)
        //点击转存按钮
    .on("click", ".widget-image .resave", resave_click)
        //点击赞按钮
    .on("click", ".widget-image .praise", praise_click)
        //点击取消赞
    .on("click", ".widget-image .unpraise", unpraise_click)
        //点击图像,点击了以后阻止a标签的click,防止页面跳转,并显示图片,这个函数暂时先不实现
    .on("click", ".widget-image a.img", img_click)
        //鼠标进入,显示action
    .on("mouseenter", ".widget-image", mouse_enter)
        //鼠标离开,隐藏action
    .on("mouseleave", ".widget-image", mouse_leave);

    function edit_click()
    {
        var t = $(this);
        var id = t.attr("data-id");
        var hash = t.attr("data-hash");
        var description = t.attr("data-description")
        MPObject.Image.Edit(id, hash, description, "");
    }

    function img_click(e)
    {
        //防止浏览器跳转
        e.preventDefault();
        var viewerWindow = $(".widget_window");
        if (viewerWindow.length == 0)
        {
            var viewerWindow = MPWidget.Window.New();
            var body = $("body");
            viewerWindow.onClose = function ()
            {
                body.removeAttr("style");
            }
            $("body").append(viewerWindow).css("overflow", "hidden");
        }
        viewerWindow.Init($(this).parents(".widget-image"));
    }

    function resave_click()
    {
        var t = $(this);
        var id = t.attr("data-id");
        var hash = t.attr("data-hash");
        //获取要转存图片的描述内容用作初始描述
        var description = t.attr("data-description");
        MPObject.Image.Resave(id, hash, description, "");
    }

    function praise_click()
    {
        var t = $(this);
        var id =t.attr("data-id");
        MPObject.Image.Praise(id, function () {
            t.removeClass("praise");
            t.addClass("unpraise");
        });
    }

    function unpraise_click() {
        var t = $(this);
        var id = t.attr("data-id");
        MPObject.Image.UnPraise(id, function () {
            t.removeClass("unpraise");
            t.addClass("praise");
        });
    }

    function mouse_enter()
    {
        $(this).find(".actions").show();
    }

    function mouse_leave()
    {
        $(this).find(".actions").hide();
    }
};
