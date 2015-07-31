<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl<JSON.PackageDetail>" %>

<div>
    <a href="<%=ResolveUrl("~/package/"+Model.id) %>"><%=Model.title %></a>
    <div><%=Model.description %></div>
</div>