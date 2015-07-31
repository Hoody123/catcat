/// <reference path="../include.js" />

MPWidget.Frame.New = function ()
{
    var content = $(MPTemplate.Widget.Frame());

    var search = content.find(".header .search");
    content.Body = content.find(".body");

    var s = MPWidget.Search.New();
    search.append(MPWidget.Search.New());

    if (MPData.user.id == 0)
    {
        var login = content.find("#login");
        var signup = content.find("#signup");

        login.click(function ()
        {
            var dialog = MPLoginDialog.New();
            dialog.onSuccess = function ()
            {
                location.reload();
            }
        });
        signup.click(function ()
        {
            MPSignUpDialog.New();
        })
    }
    else
    {
        var user_nav = content.find(".user-nav");
        var user_nav_menu = user_nav.find(".hide-menu");
        //登出
        var l = content.find("#logout");
        MPMenu(user_nav, user_nav_menu);

        var notice_nav = content.find(".notice-nav");
        var notice_nav_menu = notice_nav.find(".hide-menu");
        //点击消息之后的处理响应
        MPPopUpMenu(notice_nav, notice_nav_menu, function ()
        {
            MPMenu(user_nav, user_nav_menu);
            $(".widget-notice").remove();
            $("#activity").removeClass("on");
            $("#message").removeClass("on");
        },
        function ()//callback
        {
            user_nav.unbind();
            if (!($("#activity").hasClass("on") || $("#message").hasClass("on")))
            {
                $("#message").addClass("on");
                var notice_o = notice.New("message");
                notice_o.GetNotice();
            }

            $("#activity").click(function (e)
            {
                e.stopPropagation();
                if ($(this).hasClass("on"))
                    return;
                $("#message").removeClass("on");
                $(this).addClass("on");
                $(".widget-notice").remove();
                var notice_o = notice.New("activity");
                notice_o.GetNotice();
            });

            $("#message").click(function (e)
            {
                e.stopPropagation();
                if ($(this).hasClass("on"))
                    return;
                $("#activity").removeClass("on");
                $(this).addClass("on");
                $(".widget-notice").remove();
                var notice_o = notice.New("message");
                notice_o.GetNotice();
            })
        });

        l.click(function ()
        {
            if ($.cookie("login") == null)
            {
                MPMessageBox.New(MPMessageBox.Icons.Error, "请先登录");
                return;
            }
            $.post(host + "/ajax/logout", {}, function (data)
            {
                if (data.code == 0)
                {
                    $.cookie("login", null);
                    location.href = host;
                }
            }, "json");
        });

        var add = content.find(".add-nav");
        add.click(function ()
        {
            MPObject.Image.CreateImage();
        });

    }

    //返回顶端按钮
    var toTopButton = content.find(".float-tools .top");

    $(document).scroll(function ()
    {
        if ($(document).scrollTop() < 200)
            toTopButton.fadeOut();
        else
            toTopButton.fadeIn().css("display", "block");
    })

    toTopButton.click(function ()
    {
        $("html,body").animate({ scrollTop: 0 }, 200);
    })

    $.post(host + "/ajax/get-notice-count", {}, function (data)
    {
        if (data.code == 0)
        {
            var total = data.activity_count + data.message_count;
            if (total == 0)
                $(".notice-nav .count").hide();
            else
            {
                var noticeCount = $(".notice-nav .count");
                noticeCount.text(total);
                noticeCount.show();
            }
        }
    }, "json");
    return content;
};

notice = {
    New: function (type)
    {
        //获取最大的ID量
        notice.Max = 0;
        //标记是否在更新
        var _isUpdating = false;
        //标记是否已经更新完毕
        var _isComplete = false;

        notice.BeginUpdata = function ()
        {
            _isUpdating = true;
        }

        notice.EndUpdata = function ()
        {
            _isUpdating = false;
        }

        notice.Complete = function ()
        {
            _isComplete = true;
        }

        var container = $(".notice-nav .content ");//容器

        notice.GetNotice = function (callback)//type为类型 只能是message或者activity
        {
            $.post(host + "/ajax/get-" + type, { max: notice.Max }, function (data)
            {
                if (data.code == 0)
                {
                    if (type == "activity")
                    {
                        for (var n = data.datas.length, i = 0; i < n; i++)
                        {
                            container.append(MPTemplate.Widget.Notice.Activity(data.datas[i]));
                            notice.Max = data.data_max;
                        }
                        if (data.data_max == 1)
                            _isComplete = true;
                        if (callback)
                            callback();
                    }
                    else
                    {
                        for (var n = data.datas.length, i = 0; i < n; i++)
                        {
                            container.append(MPTemplate.Widget.Notice.Message(data.datas[i]));
                            notice.Max = data.data_max;
                        }
                        if (data.data_max == 1)
                            _isComplete = true;
                        if (callback)
                            callback();
                    }
                }
            }, "json");
        }
        container.scroll(function ()
        {
            if (_isComplete)
                return;
            if (_isUpdating)
                return;
            var scrollMax = $(this)[0].scrollHeight;
            var scrollTop = $(this)[0].scrollTop;　 //滚动到的当前位置
            var divHight = $(this).height();
            if (divHight + scrollTop >= scrollMax)
                notice.Update();
        })

        notice.Update = function ()
        {
            notice.BeginUpdata();
            notice.GetNotice(notice.EndUpdata());
        }

        notice.Destroy = function ()
        {
            delete notice;
        }
        return notice;
    }
}