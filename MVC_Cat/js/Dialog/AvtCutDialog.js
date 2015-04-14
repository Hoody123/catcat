/// <reference path="../include.js" />

MPAvtCutDialog = {
    //创建对话框,参数file为file对象{hash,width,height}
    New: function (file) {
        var dialog = MPTitleDialog.New(MPTemplate.Dialog.AvtCutDialog(file), "裁剪头像");
        var origin = dialog.Content.find(".main");
        var preview = dialog.Content.find("#preview");
        dialog.offset_x = null;
        dialog.offset_y = null;
        dialog.size = null;
        dialog.onSuccess = null;
        //预览图处理函数

        var jcrop_api,
        boundx,
        boundy,

        // Grab some information about the preview pane
        $preview = $('.previews');

        //console.log('init',[xsize,ysize]);
        origin.Jcrop({
            onChange: updatePreview,
            onSelect: updatePreview,
            aspectRatio: 1
        }, function () {
            // Use the API to get the real image size
            var bounds = this.getBounds();
            boundx = bounds[0];
            boundy = bounds[1];
            // Store the API in the jcrop_api variable
            jcrop_api = this;

        });

        function updatePreview(c) {
            if (parseInt(c.w) > 0) {
                $(".previews").children("div").each(function () {

                    var $pcontainer = $(this),
                    $pimg = $(this).find("img"),
                    xsize = $pcontainer.width();

                    var rx = xsize / c.w;

                    $pimg.css({
                        width: Math.round(rx * boundx) + 'px',
                        height: Math.round(rx * boundy) + 'px',
                        marginLeft: '-' + Math.round(rx * c.x) + 'px',
                        marginTop: '-' + Math.round(rx * c.y) + 'px'
                    });
                })
            }
        };


        dialog.ButtonOK.click(function () {
            var ratio = file.width / $(".jcrop-holder").width();
            var c = jcrop_api.tellScaled();
            dialog.offset_x = Math.round(c.x * ratio);
            dialog.offset_y = Math.round(c.y * ratio);
            //获取比例
            dialog.size = Math.round(c.w * ratio);
            if (dialog.onSuccess) {
                dialog.onSuccess();
            }
            dialog.Close();
        })

        dialog.Content.find(".cancel").click(function () {
            dialog.Close();
        })
        return dialog;
    }
}