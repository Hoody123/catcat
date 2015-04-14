
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
        var p = content.find(".user-nav");
        var m = p.find(".hide-menu");
        var l = content.find("#logout");//登出
        MPMenu(p, m);

        l.click(function () {
            if ($.cookie("login")==null) {
                MPMessageBox.New(MPMessageBox.Icons.Error, "请先登录");
                return;
            }
            $.post(host + "/ajax/logout", {}, function (data) {
                if (data.code==0) {
                    $.cookie("login", null);
                    location.href = host;
                }
            }, "json");
        });

        var add = content.find(".add-nav");
        add.click(function ()
        {
            var dialog = MPUploadDialog.New("上传图片");
            dialog.onSuccess = function (file)
            {
                var c = MPCreateImageDialog.New(imageHost + "/" + file.hash + "_fw236", "上传图片", dialog.filename);
                c.onOK = function ()
                {
                    $.post(host + "/ajax/create-image", { package_id: c.packageId, file_hash: dialog.hash, description: MPHtmlEncode(c.description) }, function (msg)
                    {
                        if (msg.code == 0)
                        {
                            MPMessageBox.New(MPMessageBox.Icons.OK, "上传图片成功");
                            c.Close();
                        }
                        else
                        {
                            MPMessageBox.New(MPMessageBox.Icons.Error, msg.msg);
                        }
                    }, "json");
                }
            }
        });
    }
    return content;
};