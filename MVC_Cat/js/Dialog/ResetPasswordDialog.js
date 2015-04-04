/// <reference path="../include.js" />

MPResetPasswordDialog = {
    New: function () {
        var dialog = MPDialog.New('<div class="dialog-mask"><div class="dialog-box"><div class="dialog-title"><span class="text">找回密码</span><div class="dialog-close"></div></div><div class="dialog-content"><div class="reset-password-dialog"><span>注册邮箱:</span> <input type="text" placeholder="请输入注册邮箱"></div></div><div class="dialog-btns"><div class="ok">确认</div></div></div></div>');
        var inputemail = dialog.Content.find(".reset-password-dialog input");
        dialog.ButtonOK.click(function () {
            if (!MPCheckEmail(inputemail.val())) {
                return;
            }
            $.post(host + "/ajax/reset-password", { email: MPHtmlEncode(inputemail.val()) }, function (data) {
                if (data.code == 0) {
                    dialog.Close();
                    MPResetPasswordSuccessDialog.New(inputemail.val());
                }
                else {
                    MPMessageBox.New(MPMessageBox.Icons.Error, data.msg);
                }
            }, "json")
        })
        return dialog;
    }
}