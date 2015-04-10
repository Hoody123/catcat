﻿/// <reference path="../../include.js" />

MPTemplate.Page.Setting = function (data, options)
{
    var strVar = "";
    strVar += "<div class=\"page-setting\">";
    strVar += "    <ul class=\"left\">";
    strVar += "        <li><a href=\"/\">基本信息<\/a><\/li>";
    strVar += "        <li><a href=\"/password\">更改密码<\/a><\/li>";
    strVar += "    <\/ul>";
    strVar += "    <div class=\"right\">";
    if (MPData.sub1 == "")
    {
        strVar += "        <div class=\"content\">";
        strVar += "            <div class=\"line\">";
        strVar += "                <h2>基本信息<\/h2>";
        strVar += "            <\/div>";
        strVar += "            <div class=\"line\">";
        strVar += "                <h3>邮箱地址<\/h3>";
        strVar += "                <div>";
        strVar += "                    <input type=\"text\" readonly=\"readonly\" value=\"{0}\" />".Format(MPData.basic_emial);
        strVar += "                <\/div>";
        strVar += "            <\/div>";
        strVar += "            <div class=\"line\">";
        strVar += "                <h3>昵称<\/h3>";
        strVar += "                <div>";
        strVar += "                    <input type=\"text\" value=\"{0}\" id=\"username\" />".Format(MPData.user.name);
        strVar += "                <\/div>";
        strVar += "            <\/div>";
        strVar += "            <div class=\"line\">";
        strVar += "                <h3>自我介绍<\/h3>";
        strVar += "                <div>";
        strVar += "                    <textarea id=\"desecription\">{0}<\/textarea>".Format(MPData.basic_description);
        strVar += "                <\/div>";
        strVar += "            <\/div>";
        strVar += "            <div class=\"line\">";
        strVar += "                <h3>头像<\/h3>";
        strVar += "                <div>";
        strVar += "                    <img class=\"avt\" src=\"{0}\" />".Format(MPObject.User.BigAvt(MPData.user));
        strVar += "                    <div class=\"upload\">上传头像<\/div>";
        strVar += "                    <div class=\"clear\"><\/div>";
        strVar += "                <\/div>";
        strVar += "            <\/div>";
        strVar += "            <div class=\"actions\">";
        strVar += "                <div class=\"submit\">确定<\/div>";
        strVar += "            <\/div>";
        strVar += "            <div class=\"clear\"><\/div>";
        strVar += "        <\/div>";
    }
    else if (MPData.sub1 == "password")
    {
        strVar += "        <div class=\"content\">";
        strVar += "            <div class=\"line\">";
        strVar += "                <h2>修改密码<\/h2>";
        strVar += "            <\/div>";
        strVar += "            <div class=\"line\">";
        strVar += "                <h3>原密码<\/h3>";
        strVar += "                <div>";
        strVar += "                    <input type=\"text\" id=\"oldpassword\" value=\"\" />";
        strVar += "                <\/div>";
        strVar += "            <\/div>";
        strVar += "            <div class=\"line\">";
        strVar += "                <h3>新密码<\/h3>";
        strVar += "                <div>";
        strVar += "                    <input type=\"text\" id=\"newpassword1\" />";
        strVar += "                <\/div>";
        strVar += "            <\/div>";
        strVar += "            <div class=\"line\">";
        strVar += "                <h3>确认新密码<\/h3>";
        strVar += "                <div>";
        strVar += "                    <input type=\"text\" id=\"newpassword\" />";
        strVar += "                <\/div>";
        strVar += "            <\/div>";
        strVar += "            <div class=\"actions\">";
        strVar += "                <div class=\"submit\">确定<\/div>";
        strVar += "            <\/div>";
        strVar += "            <div class=\"clear\"><\/div>";
        strVar += "        <\/div>";
    }
    strVar += "    <\/div>";
    strVar += "<\/div>";
    
    return strVar;
}