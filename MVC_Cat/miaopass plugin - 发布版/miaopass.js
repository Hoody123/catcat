﻿var host="http://www.miaopass.net/",source="",from=location.href,description=document.title,TimerId,button=$('\x3cdiv class\x3d"mp_pick_btn"" title\x3d"\u6536\u96c6\u8fd9\u5f20\u56fe\u7247\u5230\u55b5\u5e15\u65af"\x3e\u6536\u96c6\x3c/div\x3e');button.click(button_click);$("body").append(button);$(document).on("mouseenter","img",img_mouseenter).on("mouseleave","img",img_mouseleave);function img_mouseenter(){var a=$(this);250<=a.height()&&250<=a.width()&&(button.show(),source=a.attr("src"),description=document.title,button.offset({top:a.offset().top+5,left:a.offset().left+5}),button.on("mouseleave",function(){var b={};b.X=event.clientX;b.Y=event.clientY;MPCheckInEle(a,b)||button.hide()}),from=location.href,checkLive(a))}function img_mouseleave(){var a=$(this),b={};b.X=event.clientX;b.Y=event.clientY;MPCheckInEle(a,b)||(button.hide(),clearTimeout(TimerId))}function button_click(){var a=host+"pick?from\x3d"+encodeURIComponent(from)+"\x26source\x3d"+encodeURIComponent(source)+"\x26description\x3d"+encodeURIComponent(description);window.open(a,"_blank","toolbar\x3dno, location\x3dno, directories\x3dno, status\x3dno, menubar\x3dno, scrollbars\x3dyes, copyhistory\x3dyes, width\x3d700, height\x3d400")}function checkLive(a){setTimeout(TimerId=function(){a.is(":hidden")?button.hide():checkLive(a)},100)}function MPCheckInEle(a,b){var c=$(window),d=b.X,e=b.Y,f=a.offset().left,g=a.offset().top,h=a.width(),k=a.height();return d>f-c.scrollLeft()&&d<f+h-c.scrollLeft()&&e>g-c.scrollTop()&&e<g+k-c.scrollTop()?!0:!1};