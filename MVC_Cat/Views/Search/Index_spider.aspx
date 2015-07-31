<%@ Page Language="C#" Inherits="System.Web.Mvc.ViewPage<dynamic>" MasterPageFile="~/Views/Shared/mp_spider.Master" %>

<asp:Content ContentPlaceHolderID="body" runat="server">
    <a href="<%=ResolveUrl("~/search/"+Uri.EscapeDataString(ViewBag.Keyword)) %>">图片</a>
    <a href="<%=ResolveUrl("~/search/package/"+ Uri.EscapeDataString(ViewBag.Keyword))%>">图包</a>
    <a href="<%=ResolveUrl("~/search/user/"+ Uri.EscapeDataString(ViewBag.Keyword))%>">用户</a>

    <%
        switch ((string)ViewBag.Sub)
        {
            case "user":
                {
                    foreach (JSON.UserDetail item in ViewBag.List)
                    {
                        Response.Write(Html.Partial("user", item));
                    }
                }
                break;
            case "package":
                {
                    foreach (JSON.PackageDetail item in ViewBag.List)
                    {
                        Response.Write(Html.Partial("package", item));
                    }
                }
                break;
            default:
                {
                    foreach (JSON.ImageDetail item in ViewBag.List)
                    {
                        Response.Write(Html.Partial("image", item));
                    }
                }
                break;
        }
    %>
</asp:Content>
