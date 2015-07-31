/// <reference path="include.js" />

$(function () {
    var password = $("#password1");
    var password2 = $("#password2");
    var submit = $("#submit");

    submit.click(submit_click);

    function submit_click() {
        if (password.val() == "" || password2.val() == "") {
            MPMessageBox.New(MPMessageBox.Icons.Warn, "请将信息填写完整");
            return;
        }

        if (password.val() != password2.val()) {
            MPMessageBox.New(MPMessageBox.Icons.Warn, "两次输入的密码不一致,请检查后重新输入");
            return;
        }

        $.post("", { password: MPHtmlEncode(password.val()) }, function myfunction(data) {
            if (data.code == 0) {
                var dialog = MPMessageBox.New(MPMessageBox.Icons.OK, "修改密码成功,点击确认后返回主页");
                dialog.onOK = function () {
                    location.href = host;
                };
            }
            else {
                MPMessageBox.New(MPMessageBox.Icons.Error, data.msg);
            }
        }, "json")
    }
})