<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl<JSON.Comment>" %>

<div>
    <a href="<%=ResolveUrl("~/user/"+ Model.user.id) %>"><%=Model.user.name %></a>
    <div><%=Model.text %></div>
</div>