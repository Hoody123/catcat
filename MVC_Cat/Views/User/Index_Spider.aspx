<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/mp_spider.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="body" runat="server">
    <%
        var user = ViewBag.User as JSON.UserDetail;
        var sub1 = (string)ViewBag.Sub1;
        var sub2 = (string)ViewBag.Sub2;
        var datas = ViewBag.Datas as List<object>;
    %>
    <h1><%=user.name %></h1>
    <div><%=user.description %></div>
    <a href="<%=ResolveUrl("~/user/"+user.id) %>"><%=user.packages_count %>图包</a>
    <a href="<%=ResolveUrl("~/user/"+user.id+"/image") %>"><%=user.images_count %>图片</a>
    <a href="<%=ResolveUrl("~/user/"+user.id+"/praise") %>"><%=user.praise_count %>赞</a>
    <a href="<%=ResolveUrl("~/user/"+user.id+"/following") %>"><%=user.follows_count %>关注</a>
    <a href="<%=ResolveUrl("~/user/"+user.id+"/follower") %>"><%=user.followers_count %>粉丝</a>
    <%if (sub1 == "following")
      { %>
    <a href="<%=ResolveUrl("~/user/"+user.id+"/following") %>">用户</a>
    <a href="<%=ResolveUrl("~/user/"+user.id+"/following/package") %>">图包</a>
    <%} %>

    <%switch (sub1)
      {
          case "image":
              foreach (JSON.ImageDetail item in datas)
              {
                  Response.Write(Html.Partial("image", item));
              }
              break;
          case "praise":
              foreach (JSON.ImageDetail item in datas)
              {
                  Response.Write(Html.Partial("image", item));
              }
              break;
          case "following":
              switch (sub2)
              {
                  case "package":
                      foreach (JSON.PackageDetail item in datas)
                      {
                          Response.Write(Html.Partial("package", item));
                      }
                      break;
                  default:
                      foreach (JSON.UserDetail item in datas)
                      {
                          Response.Write(Html.Partial("user", item));
                      }
                      break;
              }
              break;
          case "follower":
              foreach (JSON.UserDetail item in datas)
              {
                  Response.Write(Html.Partial("user", item));
              }
              break;
          default:
              foreach (JSON.PackageDetail item in datas)
              {
                  Response.Write(Html.Partial("package", item));
              }
              break;
      } %>
</asp:Content>
