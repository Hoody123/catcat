<%@ Page Title="" Language="C#" Inherits="System.Web.Mvc.ViewPage<dynamic>" MasterPageFile="~/Views/Shared/mp.Master" %>

<asp:Content runat="server" ContentPlaceHolderID="head">
    <script src="<%=ResolveUrl("~/js/page/reset-password_1404260.js") %>"></script>
</asp:Content>

<asp:Content runat="server" ContentPlaceHolderID="body">
    <div class="page-account page-reset-password">
        <div class="title">请输入新密码</div>
        <div class="i">密码:</div>
        <input type="password" id="password1" name="password" />
        <div class="i">确认密码:</div>
        <input type="password" id="password2" />
        <div id="submit">提交</div>
    </div>
</asp:Content>

