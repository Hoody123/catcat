/// <reference path="../include.js" />

MPObject.Image = {};

MPObject.Image._info = function (image, width, shape) {
    var res = {};
    shape = shape ? shape : "";
    switch (shape) {
        case "fw":
            {
                res.url = imageHost + "/" + image.file.hash + "_fw" + width;
                res.width = width;
                res.height = Math.ceil(76 * image.file.height / image.file.width);
            }
            break;
        case "sq":
            {
                res.url = imageHost + "/" + image.file.hash + "_sq" + width
                res.width = width;
                res.height = width;
            }
            break;
        default:
            {
                res.url = imageHost + "/" + image.file.hash;
                res.width = image.file.width;
                res.height = image.file.height;
            }
            break;
    }
    return res;
}

MPObject.Image.sq236=function(image)
{
    return MPObject.Image._info(image, 236, "sq");
}

MPObject.Image.fw78 = function (image) {
    return MPObject.Image._info(image, 78, "fw");
}

MPObject.Image.fw236 = function (image) {
    return MPObject.Image._info(image, 236, "fw");
}

MPObject.Image.fw658 = function (image) {
    return MPObject.Image._info(image, 658, "fw");
}


MPObject.Image.fw75 = function (image) {
    return MPObject.Image._info(image, 75, "sq");
}

MPObject.Image.fw236 = function (image) {
    return MPObject.Image._info(image, 236, "sq");
}

MPObject.Image.Origin = function (image) {
    return MPObject.Image._info(image);
}

MPObject.Image.Resave = function (imageID, imageHash, description, source) {
    if (!MPCheckLogin()) {
        return;
    }
    var url = imageHost + "/" + imageHash + "_fw236";
    var dialog = MPCreateImageDialog.New(url, "转存", description, false, source);
    dialog.onOK = function () {
        $.post(host + "/ajax/resave", { image_id: imageID, package_id: dialog.packageId, description: dialog.description }, function (data) {
            if (data.code == 0) {
                var box = MPMessageBox.New(MPMessageBox.Icons.OK, "图片转存成功");
                box.onOK = function () {
                    dialog.Close();
                    box.Close();
                }
            }
            else {
                MPMessageBox.New(MPMessageBox.Icons.Error, data.msg);
            }
        }, "json");
    }
}

MPObject.Image.Edit = function (imageID, imageHash, description, source,callback) {
    if (!MPCheckLogin()) {
        return;
    }
    var url = imageHost + "/" + imageHash + "_fw236";
    var dialog = MPCreateImageDialog.New(url, "编辑图片", description, true, source);
    dialog.onOK = function () {
        $.post(host + "/ajax/edit-image", { id: imageID, package_id: dialog.packageId, description: dialog.description, source: dialog.source }, function (data) {
            if (data.code == 0) {
                var box = MPMessageBox.New(MPMessageBox.Icons.OK, "图片编辑成功");
                box.onOK = function () {
                    dialog.Close();
                    box.Close();
                }
            }
            else {
                MPMessageBox.New(MPMessageBox.Icons.Error, data.msg);
            }
        }, "json");
    }

    dialog.onDelete = function () {
        MPObject.Image.Delete(imageID,callback);
    }
}

MPObject.Image.Delete = function (imageID, callback) {
    if (!MPCheckLogin()) {
        return;
    }
    //成功之后的处理考虑一下
    $.post(host + "/ajax/delete-image", { id: imageID }, function (data) {
        if (data.code == 0) {
            if (callback) {
                callback();
            }
        }
        else {
            MPMessageBox.New(MPMessageBox.Icons.Error, data.msg);
        }
    }, "json")
}

MPObject.Image.Praise = function (imageID, callback) {
    if (!MPCheckLogin()) {
        return;
    }
    $.post(host + "/ajax/praise-image", { image_id: imageID }, function (data) {
        if (callback) {
            callback();
        }
    }, "json");
}

MPObject.Image.UnPraise = function (imageID, callback) {
    if (!MPCheckLogin()) {
        return;
    }
    $.post(host + "/ajax/unpraise-image", { image_id: imageID }, function (data) {
        if (callback) {
            callback();
        }
    }, "json");
}
