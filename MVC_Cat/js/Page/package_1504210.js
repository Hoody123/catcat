/// <reference path="../include.js" />

$(function ()
{
    var frame = MPWidget.Frame.New();
    frame.Body.append(MPTemplate.Page.Package(MPData.package));
    var waterfall = MPWaterFall.New($(window), frame.Body.find(".page-package .waterfall"), 4, 236, 6, 6, 6, 6);
    $("body").append(frame);

    switch (MPData.sub1)
    {

        case "follower":
            waterfallPush(MPWidget.User, null, "id");
            break;

        default:
            if (MPData.user.id == MPData.package.user.id)
            {
                var add = MPTemplate.Widget.Add;
                var element = $(add(MPData.package, add.Options.AddImage));
                element.click(function ()
                {
                    MPObject.Image.CreateImage();
                });
                waterfall.PushElement(element);
            }
            waterfallPush(MPWidget.Image, MPTemplate.Widget.Image.Options.ShowSource, "id");
            break;
    }

    waterfall.Resize();

    //这里做了修改,去除掉多余的参数,自己看看
    function waterfallPush(type, typeDetail, returnField)
    {
        var max = waterfall.Push(MPData.datas, type, typeDetail, returnField);
        waterfall.onBottom = function ()
        {
            waterfall.BeginUpdate();
            $.getJSON("", { ajax: true, max: max }, function (data)
            {
                max = waterfall.Push(data, type, typeDetail, returnField);
                waterfall.EndUpdate();
            });
        }
    }


    //注意下方,注释怎么都写在了程序末尾?!
    $(document).on("click", ".page-package .package-edit", edit_click)
        .on("click", ".page-package .package-follow", follow_click)
    .on("click", ".page-package .package-unfollow", unfollow_click);

    function edit_click()
    {
        //提取id
        var id = $(this).attr("data-id");
        var title = $(this).attr("data-title");
        var description = $(this).attr("data-description");
        MPObject.Package.Edit(id, title, description);
    }

    //关注操作
    function follow_click()
    {
        var t = $(this);
        var id = t.attr("data-id");
        MPObject.Package.Follow(id, function ()
        {
            t.removeClass("package-follow");
            t.addClass("package-unfollow");
            ///这里以后考虑使用messageTip来代替
            //MPMessageBox.New(MPMessageBox.Icons.OK, "关注成功!");
        })
    }

    //取消关注
    function unfollow_click()
    {
        var t = $(this);
        //var box = MPMessageBox.New(MPMessageBox.Icons.Warn, "确认要取消关注?");
        //box.onOK = function myfunction()
        //{
        var id = t.attr("data-id");
        MPObject.Package.UnFollow(id, function ()
        {
            t.removeClass("package-unfollow");
            t.addClass("package-follow");
        })
        //}
    }
})
