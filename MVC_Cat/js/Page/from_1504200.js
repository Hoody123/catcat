/// <reference path="../include.js" />

$(function ()
{
    var frame =MPWidget.Frame.New();
    frame.Body.append(MPTemplate.Page.From());
    var wf = MPWaterFall.New($(window), frame.Body.find(".page-from>.waterfall"), 4, 236, 6, 6, 6, 6);

    $("body").append(frame);
    wf.Resize();

    var max = wf.Push(MPData.images, MPWidget.Image, null, "id");
    wf.onBottom=function(){
        wf.BeginUpdate();
        $.getJSON("",{ajax:true,max:max},function (data) {
            max = wf.Push(data, MPWidget.Image, null, "id");
            wf.EndUpdate();
        })
    }
});