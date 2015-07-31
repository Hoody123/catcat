<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/mp_spider.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="body" runat="server">
    <%
        var image = ViewBag.Image as JSON.ImageDetail;
    %>
    <a href="<%=ResolveUrl("~/user/"+image.user.id) %>"><%=image.user.name %></a>
    <a href="<%=ResolveUrl("~/package/"+image.package.id) %>"><%=image.package.title %></a>
    <img src="<%=Tools.ImageServerHost+"/"+image.file.hash+"_fw658.jpg" %>" alt="<%=Server.HtmlEncode(image.description) %>" />
    <div><%=image.description %></div>
    <%
        foreach (JSON.Comment item in image.comments)
        {
    %>
    <%=Html.Partial("comment",item) %>
    <%
        }
    %>
    <%
        if (ViewBag.PrevID != null)
        { 
    %>
    <a href="<%=ResolveUrl("~/image/"+ViewBag.PrevID) %>"><%=Server.HtmlEncode(ViewBag.PrevText) %></a>
    <%
        }
        if (ViewBag.NextID != null)
        {
    %>
    <a href="<%=ResolveUrl("~/image/"+ViewBag.NextID ) %>"><%=Server.HtmlEncode(ViewBag.NextText ) %></a>
    <%
        }
    %>
</asp:Content>
