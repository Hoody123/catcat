<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/mp_spider.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="body" runat="server">

    <%
        var package = ViewBag.Package as JSON.PackageDetail;
        var sub1 = (string)ViewBag.Sub1;
        var list = ViewBag.Datas as List<object>;        
    %>
    <h1><%=package.title %></h1>
    <div><%=package.description %></div>
    <a href="<%=ResolveUrl("~/user/"+package.user.id) %>"><%=package.user.name %></a>
    <div><%=package.imageCount %>图片</div>
    <div><%=package.followerCount %>人关注</div>
    <%switch (sub1)
      {
          case "follower":
              break;
          default:
              foreach (JSON.ImageDetail item in list)
              {
    %>
    <%=Html.Partial("image",item) %>
    <%
              }
              break;
      }%>
</asp:Content>
