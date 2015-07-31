/// <reference path="../include.js" />

$(function () {
    var frame = MPWidget.Frame.New();
    frame.Body.append(MPTemplate.Page.Setting());
    $("body").append(frame);

    var body = frame.Body;

    switch (MPData.sub1) {
        case "password":
            {
                //确认修改密码
                var oldPassword = body.find("#oldpassword");
                var newPassword1 = body.find("#newpassword1");
                var newPassword = body.find("#newpassword");
                body.find(".submit").click(function () {
                    if (oldPassword.val() == "" || newPassword1.val() == "" || newPassword.val() == "") {
                        MPMessageBox.New(MPMessageBox.Icons.Warn, "请将信息补充完整");
                        return;
                    }
                    if (newPassword1.val() != newPassword.val()) {
                        MPMessageBox.New(MPMessageBox.Icons.Warn, "两次输入的新密码不一致,请重新输入!");
                        return;
                    }
                    $.post(host + "/ajax/setting-password", { old_password: MPHtmlEncode(oldPassword.val()), new_password: MPHtmlEncode(newPassword1.val()) }, function (data) {
                        if (data.code == 0) {
                            MPMessageBox.New(MPMessageBox.Icons.OK, "密码修改成功");
                        }
                        else {
                            MPMessageBox.New(MPMessageBox.Icons.Error, data.msg);
                        }
                    }, "json");
                });
            }
            break;
        default:
            {
                var inputUsername = body.find("#username");
                var inputDescription = body.find("#description");
                var avt_hash;
                var avt_offset_x;
                var avt_offset_y;
                var avt_size;

                body.find(".upload").click(function () {
                    var dialog = MPUploadDialog.New("上传头像图片");
                    dialog.onSuccess = function (file) {
                        avt_hash = file.hash;
                        var d = MPAvtCutDialog.New(file);
                        d.onSuccess = function () {
                            avt_offset_x = d.offset_x;
                            avt_offset_y = d.offset_y;
                            avt_size = d.size;
                            //改变设置页预览头像
                            var container = $(".page-setting .avt");
                            var pimg = container.find("img");
                            var ratio = container.width() / avt_size;
                            pimg.attr("src", imageHost + "/" + file.hash+"_fw658.jpg");
                            pimg.css({
                                width: Math.round(ratio * file.width) + 'px',
                                height: Math.round(ratio * file.height) + 'px',
                                marginLeft: '-' + Math.round(ratio * avt_offset_x) + 'px',
                                marginTop: '-' + Math.round(ratio * avt_offset_y) + 'px'
                            });
                        }
                    }
                })

                body.find(".submit").click(function () {
                    if (inputUsername.val() == "") {
                        MPMessageBox.New(MPMessageBox.Icons.Warn, "请输入昵称");
                        return;
                    }
                    $.post(host + "/ajax/setting-basic", { name: MPHtmlEncode(inputUsername.val()), description: MPHtmlEncode(inputDescription.val()), avt_hash: avt_hash, avt_offset_x: avt_offset_x, avt_offset_y: avt_offset_y, avt_size: avt_size }, function (data) {
                        if (data.code == 0) {
                            MPMessageBox.New(MPMessageBox.Icons.OK, "用户信息修改成功");
                        }
                        else {
                            MPMessageBox.New(MPMessageBox.Icons.Error, data.msg);
                        }
                    }, "json");
                })
            }
    }

});

