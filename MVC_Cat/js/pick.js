/// <reference path="jquery.js" />
/// <reference path="main.js" />
/// <reference path="Dialog/LoginDialog.js" />
/// <reference path="Dialog/CreateImageDialog.js" />
/// <reference path="Dialog/Dialog.js" />
/// <reference path="Dialog/TitleDialog.js" />
/// <reference path="Dialog/MessageBox.js" />

$(document).ready(function ()
{
    //页面加载完毕后马上启动创建图片对话框
    //var createImageDialog = MPCreateImageDialog.New(MPData.source,"收集",MPData.description);
    var createImageDialog = MPCreateImageDialog.New({
        previewUrl: MPData.source,
        title: "收集",
        description: MPData.description,
        check:{source:MPData.source}
    });
    //不显示关闭按钮
    createImageDialog.HideClose();
    //添加onOK处理函数
    createImageDialog.onOK = function ()
    {
        $.post(host + "/ajax/pick", {from:MPData.from,source:MPData.source,description:MPHtmlEncode(createImageDialog.description),package_id:createImageDialog.packageId},function myfunction(data) {
            if (data.code==0) {
                    window.close();
            }
            else {
                MPMessageBox.New(MPMessageBox.Icons.Error,data.msg);
            }
        },"json");
        //搞定了以后发送ajax请求,详细见文档
    }

    //如果未登录,显示登录窗口
    if(MPData.user.id==0)
    {
        var loginDialog = MPLoginDialog.New();
        loginDialog.HideClose();
    }
})