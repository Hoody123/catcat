/// <reference path="../include.js" />

MPResetPasswordSuccessDialog = {};
MPResetPasswordSuccessDialog.New = function (email) {
    var strVar = "";
    strVar += "<div class=\"dialog-mask\">";
    strVar += "    <div class=\"dialog-box\">";
    strVar += "        <div class=\"dialog-title\">";
    strVar += "            <span class=\"text\">邮件已发送...<\/span>";
    strVar += "            <div class=\"dialog-close\"><\/div>";
    strVar += "        <\/div>";
    strVar += "        <div class=\"dialog-content\">";
    strVar += "            <div class=\"reset-password-success-dialog\">";
    strVar += "                <p>重置密码的邮件已经发送到<span class=\"email\">{0}<\/span>，请查收邮件并重新设置密码。<\/p>";
    strVar += "                <p>如果没有收到邮件，请耐心等待，或者<span class=\"resend\">重新发送<\/span><\/p>";
    strVar += "                <p class=\"return\">&lt;&lt; 返回登录页<\/p>";
    strVar += "            <\/div>";
    strVar += "        <\/div>";
    strVar += "    <\/div>";
    strVar += "<\/div>";
    strVar += "";

    var dialog = MPDialog.New(strVar.Format(email));

    var buttonResend = dialog.Content.find(".resend");//重新发送
    var buttonReturn = dialog.Content.find(".return");//登录按钮

    buttonResend.click(function () {
        $.post(host + "/ajax/reset-password", { email: MPHtmlEncode(email) }, function (data) {
            if (data.code == 0) {
                MPMessageBox.New(MPMessageBox.Icons.OK, "邮件发送成功,请查收");
            }
        }, "json");
    })
    buttonReturn.click(function () {
        dialog.Close();
        MPLoginDialog.New();
    })
    return dialog;
}