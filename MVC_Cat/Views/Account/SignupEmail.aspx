<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/mp.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="<%=ResolveUrl("~/js/signup-email_1404260.js") %>"></script>
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="body" runat="server">
        <div class="page-account page-signup ">
        <div class="title">请完善注册信息</div>
        <input type="text" value="<%=ViewBag.Email %>" readonly="readonly">
        <div class="i">昵称:</div>
        <input maxlength="20" id="username" name="username" type="text" />
        <div class="i">密码:</div>
        <input type="password" id="password" name="password" />
        <div class="i">确认密码:</div>
        <input type="password" id="password2" />
        <div id="submit">提交</div>
    </div>
</asp:Content>
