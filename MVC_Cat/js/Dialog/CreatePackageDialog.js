/// <reference path="../include.js" />

MPCreatePackageDialog = {
    New: function (isEdit, packageid, packagetitle, description) {
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
        if (isEdit == true) {
            strVar += "                    <input type=\"text\" class=\"package-title\" placeholder={0} />".Format(packagetitle);
        }
        else {
            strVar += "                <input type=\"text\" class=\"package-title\" placeholder=\"请输入图包标题\" />";
        }

        strVar += "                    <div class=\"title\">描述<\/div>";
        if (isEdit == true) {
            strVar += "                    <textarea class=\"package-description\">{0}<\/textarea>".Format(description);
        }
        else {
            strVar += "                    <textarea class=\"package-description\">请输入图片描述<\/textarea>";
        }

        strVar += "                <\/div>";
        strVar += "            <\/div>";
        strVar += "            <div class=\"dialog-btns\">";
        if (isEdit == true) {
            strVar += "                <div class=\"delete\">删除<\/div>";
        }
        strVar += "                <div class=\"ok\">确认<\/div>";
        strVar += "                <div class=\"cancel\">取消<\/div>";
        strVar += "            <\/div>";
        strVar += "        <\/div>";
        strVar += "<\/div>";
        var title = "";
        if (isEdit==true) {
            title = "编辑图包";
        }
        else {
            title = "创建图包";
        }
              
        var dialog = MPTitleDialog.New(strVar,title);
        dialog.packageid = null;
        var inputtitle = dialog.Content.find(".package-title");
        var inputdescription = dialog.Content.find(".package-description");
        if (isEdit == true) {
            dialog.ButtonOK.click(function () {
                $.post(host + "/ajax/edit-package", { id: packageid, title: MPHtmlEncode(inputtitle.val()), description: MPHtmlEncode(inputdescription.val()) }, function (data) {
                    if (data.code == 0) {
                        var box = MPMessageBox.New(MPMessage.Icons.OK, "编辑成功");
                        box.onOK = function () {
                            dialog.Close();
                        }
                    }
                    else {
                        MPMessageBox.New(MPMessage.Icons.Error, data.msg);
                    }
                }, "json");
            })
        }
        else {
            dialog.ButtonOK.click(function () {
                $.post(host + "/ajax/create-package", { title: MPHtmlEncode(inputtitle.val()), description: MPHtmlEncode(inputdescription.val()) }, function (data) {
                    if (data.code == 0) {
                        dialog.packageid = data.id;
                        dialog.Close();
                    }
                    else {
                        MPMessageBox.New(MPMessageBox.Icons.Error, data.msg);
                    }
                }, "json");
            })
        }

        dialog.Content.find(".cancel").click(function () {
            dialog.Close();
        })
        return dialog;
    }
}