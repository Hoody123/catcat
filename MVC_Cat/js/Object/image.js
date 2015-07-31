/// <reference path="../include.js" />

MPObject.Image = {};

MPObject.Image._info = function (image, width, shape)
{
    var res = {};
    shape = shape ? shape : "";
    switch (shape)
    {
        case "fw":
            {
                res.url = imageHost + "/" + image.file.hash + "_fw" + width;
                res.width = width;
                res.height = Math.ceil(width * image.file.height / image.file.width);
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
    res.url += ".jpg";
    return res;
}

MPObject.Image.sq236 = function (image)
{
    return MPObject.Image._info(image, 236, "sq");
}

MPObject.Image.fw78 = function (image)
{
    return MPObject.Image._info(image, 78, "fw");
}

MPObject.Image.fw236 = function (image)
{
    return MPObject.Image._info(image, 236, "fw");
}

MPObject.Image.fw658 = function (image)
{
    return MPObject.Image._info(image, 658, "fw");
}


MPObject.Image.sq75 = function (image)
{
    return MPObject.Image._info(image, 75, "sq");
}

MPObject.Image.fw236 = function (image)
{
    return MPObject.Image._info(image, 236, "fw");
}

MPObject.Image.Origin = function (image)
{
    return MPObject.Image._info(image);
}

MPObject.Image.Resave = function (imageID, imageHash, description)
{
    if (!MPCheckLogin())
    {
        return;
    }
    var url = imageHost + "/" + imageHash + "_fw236.jpg";
    //var dialog = MPCreateImageDialog.New(url, "转存", description, false, "");
    var defaultPackageId = localStorage["default-package-id"];
    var dialog = MPCreateImageDialog.New({
        previewUrl: url,
        title: "转存",
        description: description,
        check: { image_id: imageID },
        defaultPackageId:defaultPackageId
    });
    dialog.onOK = function ()
    {
        $.post(host + "/ajax/resave", { image_id: imageID, package_id: dialog.packageId, description: dialog.description }, function (data)
        {
            if (data.code == 0)
            {
                var box = MPMessageBox.New(MPMessageBox.Icons.OK, "图片转存成功");
                box.onOK = function ()
                {
                    dialog.Close();
                    box.Close();
                }
            }
            else
            {
                MPMessageBox.New(MPMessageBox.Icons.Error, data.msg);
            }
        }, "json");
    }
}

MPObject.Image.Edit = function (imageID, imageHash, description, source, packageID, packageTitle, callback)
{
    if (!MPCheckLogin())
    {
        return;
    }
    var url = imageHost + "/" + imageHash + "_fw236.jpg";
    //var dialog = MPCreateImageDialog.New(url, "编辑图片", description, true, source,packageID,packageTitle);
    var dialog = MPCreateImageDialog.New({
        previewUrl: url,
        title: "编辑图片",
        canEdit: true,
        source: source,
        descripiton: description,
        defaultPackageId: packageID
    }); dialog.onOK = function ()
    {
        $.post(host + "/ajax/edit-image", { id: imageID, package_id: dialog.packageId, description: dialog.description, source: dialog.source }, function (data)
        {
            if (data.code == 0)
            {
                var box = MPMessageBox.New(MPMessageBox.Icons.OK, "图片编辑成功");
                box.onOK = function ()
                {
                    dialog.Close();
                    box.Close();
                }
            }
            else
            {
                MPMessageBox.New(MPMessageBox.Icons.Error, data.msg);
            }
        }, "json");
    }

    dialog.onDelete = function ()
    {
        MPObject.Image.Delete(imageID, callback);
    }
}

MPObject.Image.Delete = function (imageID, callback)
{
    if (!MPCheckLogin())
    {
        return;
    }
    var box = MPMessageBox.New(MPMessageBox.Icons.Warn, "图片删除后无法恢复哦!")
    box.onOK = function ()
    {
        $.post(host + "/ajax/delete-image", { id: imageID }, function (data)
        {
            if (data.code == 0)
            {
                if (callback)
                {
                    callback();
                }
                location.reload();
            }
            else
            {
                MPMessageBox.New(MPMessageBox.Icons.Error, data.msg);
            }
        }, "json");
    }
}

MPObject.Image.Praise = function (imageID, callback)
{
    if (!MPCheckLogin())
    {
        return;
    }
    $.post(host + "/ajax/praise-image", { image_id: imageID }, function (data)
    {
        if (callback)
        {
            callback();
        }
    }, "json");
}

MPObject.Image.UnPraise = function (imageID, callback)
{
    if (!MPCheckLogin())
    {
        return;
    }
    $.post(host + "/ajax/unpraise-image", { image_id: imageID }, function (data)
    {
        if (callback)
        {
            callback();
        }
    }, "json");
}

MPObject.Image.CreateImage = function ()
{
    var dialog = MPUploadDialog.New("上传图片");
    dialog.onSuccess = function (file)
    {
        //var c = MPCreateImageDialog.New(imageHost + "/" + file.hash + "_fw236", "上传图片", dialog.filename);
        var c = MPCreateImageDialog.New({
            previewUrl: imageHost + "/" + file.hash + "_fw236.jpg",
            title: "上传图片",
            description: dialog.filename,
            check: {hash:file.hash}
        });
        c.onOK = function ()
        {
            $.post(host + "/ajax/create-image", { package_id: c.packageId, file_hash: file.hash, description: MPHtmlEncode(c.description) }, function (msg)
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
}