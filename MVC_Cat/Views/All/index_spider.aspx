<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/mp_spider.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="body" runat="server">
    <%
        var list = ViewBag.List as List<JSON.ImageDetail>;
        foreach (JSON.ImageDetail item in list)
        {
    %>
    <%=Html.Partial("image", item) %>
    <%
        }
    %>
</asp:Content>
