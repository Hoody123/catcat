/// <reference path="../include.js" />

MPCreatePackageDialog = {
    New: function (isEdit, packageid, packagetitle, description)
    {
        packagetitle = packagetitle ? packagetitle : "";
        description = description ? description : "";
        var strVar = "";
        strVar += "<div class=\"dialog-mask\">";
        strVar += "        <div class=\"dialog-box\">";
        strVar += "            <div class=\"dialog-title\">";
        strVar += "                <span class=\"text\"><\/span>";
        strVar += "                <div class=\"dialog-close\"><\/div>";
        strVar += "            <\/div>";
        strVar += "            <div class=\"dialog-content\">";
        strVar += "                <div class=\"package-dialog\">";
        strVar += "                    <div class=\"title\">标题<\/div>";
        if (isEdit == true)
        {
            strVar += "                    <input type=\"text\" class=\"package-title\" value={0} />".Format(packagetitle);
        }
        else
        {
            strVar += "                <input type=\"text\" class=\"package-title\"/>";
        }

        strVar += "                    <div class=\"title\">描述<\/div>";
        if (isEdit == true)
        {
            strVar += "                    <textarea class=\"package-description\" placeholder=\"请输入图包描述\">{0}<\/textarea>".Format(description);
        }
        else
        {
            strVar += "                    <textarea class=\"package-description\" placeholder=\"请输入图包描述\"><\/textarea>";
        }

        strVar += "                <\/div>";
        strVar += "            <\/div>";
        strVar += "            <div class=\"dialog-btns\">";
        if (isEdit == true)
        {
            strVar += "                <div class=\"delete\">删除<\/div>";
        }
        strVar += "                <div class=\"ok\">确认<\/div>";
        strVar += "                <div class=\"cancel\">取消<\/div>";
        strVar += "            <\/div>";
        strVar += "        <\/div>";
        strVar += "<\/div>";
        var title = "";
        if (isEdit == true)
        {
            title = "编辑图包";
        }
        else
        {
            title = "创建图包";
        }

        var dialog = MPTitleDialog.New(strVar, title);
        dialog.packageid = null;
        dialog.onDelete = null;
        var inputtitle = dialog.Content.find(".package-title");
        var inputdescription = dialog.Content.find(".package-description");
        if (isEdit == true)
        {
            dialog.packageid = packageid;
            dialog.ButtonOK.click(function ()
            {
                $.post(host + "/ajax/edit-package", { id: packageid, title: MPHtmlEncode(inputtitle.val()), description: MPHtmlEncode(inputdescription.val()) }, function (data)
                {
                    if (data.code == 0)
                    {
                        var box = MPMessageBox.New(MPMessageBox.Icons.OK, "编辑成功");
                        box.onOK = function ()
                        {
                            dialog.Close();
                        }
                    }
                    else
                    {
                        MPMessageBox.New(MPMessageBox.Icons.Error, data.msg);
                    }
                }, "json");
            })
        }
        else
        {
            dialog.ButtonOK.click(function ()
            {
                $.post(host + "/ajax/create-package", { title: MPHtmlEncode(inputtitle.val()), description: MPHtmlEncode(inputdescription.val()) }, function (data)
                {
                    if (data.code == 0)
                    {
                        dialog.packageid = data.packageid;
                        //dialog.Close();
                        location.href = "/package/" + dialog.packageid;
                    }
                    else
                    {
                        MPMessageBox.New(MPMessageBox.Icons.Error, data.msg);
                    }
                }, "json");
            })
        }

        dialog.Content.find(".cancel").click(function ()
        {
            dialog.Close();
        })

        //删除图包的处理函数
        dialog.Content.find(".delete").click(function ()
        {
            var box = MPMessageBox.New(MPMessageBox.Icons.Warn, "确定要删除图包?一旦删除后就无法还原哦>_<");
            box.onOK = function ()
            {
                $.post(host + "/ajax/delete-package", { id: dialog.packageid }, function (data)
                {
                    if (data.code == 0)
                    {
                        if (dialog.onDelete)
                        {
                            dialog.onDelete();
                        }
                        location.href = "/user/" + MPData.user.id;
                        //dialog.Close();
                    }
                    else
                    {
                        MPMessageBox.New(MPMessageBox.Icons.Error, data.msg);
                    }
                }, "json")
            }
        })
        return dialog;
    }
}