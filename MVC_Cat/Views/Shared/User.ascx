<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl<JSON.UserDetail>" %>

<div>
    <a href="<%=ResolveUrl("~/user/"+Model.id) %>"><%=Model.name %></a>
    <a href="<%=ResolveUrl("~/user/"+Model.id+"/image") %>"><%=Model.images_count %>图片</a>
    <a href="<%=ResolveUrl("~/user/"+Model.id) %>"><%=Model.packages_count %>图包</a>
</div>