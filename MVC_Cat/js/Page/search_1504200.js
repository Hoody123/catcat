/// <reference path="../include.js" />

$(function ()
{
    var frame = MPWidget.Frame.New();
    frame.Body.append(MPTemplate.Page.Search());
    $("body").append(frame);

    var wf = MPWaterFall.New($(window), $(".page-search>.waterfall"), 4, 236, 6, 6, 6, 6);
    wf.Resize();
    var page = 0;
    var type = null;
    switch(MPData.sub1)
    {
        case "package":
            {
                type = MPWidget.Package;
            }
            break;
        case "user":
            {
                type = MPWidget.User;
            }
            break;
        default:
            {
                type = MPWidget.Image;
            }
            break;
    }

    wf.Push(MPData.datas, type, null, null);
    wf.onBottom = function ()
    {
        wf.BeginUpdate();
        $.getJSON("", { ajax: true, page: ++page }, function (data)
        {
            wf.Push(data, type, null, null);
            wf.EndUpdate();
        })
    }
})