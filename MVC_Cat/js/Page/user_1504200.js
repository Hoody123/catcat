/// <reference path="../include.js" />

$(function ()
{
    var frame = MPWidget.Frame.New();
    //var userInfo = MPWidget.UserInfo.New();
    frame.Body.append(MPTemplate.Page.User(MPData.page_user));
    $("body").append(frame);

    var wf = MPWaterFall.New($(window), frame.Body.find(".page-user>.waterfall"), 4, 236, 6, 6, 6, 6);

    var type = null, option = null;
    switch (MPData.sub1)
    {
        case "image":
            type = MPWidget.Image;
            //waterfallPush(userInfo, MPWidget.Image, null, "id");
            break;

        case "praise":
            {
                switch (MPData.sub2)
                {
                    case "package":
                        type = MPWidget.Package;
                        //waterfallPush(userInfo, MPWidget.Package, null, "id");
                        break;
                    default:
                        type = MPWidget.Image;
                        //waterfallPush(userInfo, MPWidget.Image, null, "id");
                        break;
                }
            }
            break;

        case "following":
            {
                switch (MPData.sub2)
                {
                    case "package":
                        type = MPWidget.Package;
                        //waterfallPush(userInfo, MPWidget.Package, null, "id");
                        break;
                    default:
                        type = MPWidget.User;
                        //waterfallPush(userInfo, MPWidget.User, null, "id");
                        break;
                }
            }
            break;

        case "follower":
            type = MPWidget.User;
            //waterfallPush(userInfo, MPWidget.User, null, "id");
            break;

        default:
            type = MPWidget.Package;
            if (MPData.user.id == MPData.page_user.id)
            {
                var add = MPTemplate.Widget.Add;
                var element = $(add(MPData.user, add.Options.AddPackage));
                element.click(function ()
                {
                    MPCreatePackageDialog.New(false);
                    ////在这里写上创建图包点击后的响应函数
                });
                wf.PushElement(element);
            }
            //waterfallPush(userInfo, MPWidget.Package, null, "id");
            break;
    }
    wf.Resize();
    //function waterfallPush(userinfo, type, typeDetail, returnField)
    //{
    var max = MPData.data_max;
    wf.Push(MPData.datas, type, null, null);
    wf.onBottom = function ()
    {
        wf.BeginUpdate();
        $.getJSON("", { ajax: true, max: max }, function (data)
        {
            max = data.data_max;
            wf.Push(data.datas, type, null, "id");
            wf.EndUpdate();
        });
    }
    //}

    /////////////
    //页面事件绑定
    /////////////
    $(document).on("click", ".page-user .user-follow", follow_click)
    .on("click", ".page-user .user-unfollow", unfollow_click);

    //关注用户
    function follow_click()
    {
        var t = $(this);
        var id = t.attr("data-id");
        MPObject.User.Actions.Follow(id, function ()
        {
            t.removeClass("user-follow");
            t.addClass("user-unfollow");
        })
    }

    //取消关注用户
    function unfollow_click()
    {
        var t = $(this);
        var id = t.attr("data-id");
        MPObject.User.Actions.UnFollow(id, function ()
        {
            t.removeClass("user-unfollow");
            t.addClass("user-follow");
        })
    }
})