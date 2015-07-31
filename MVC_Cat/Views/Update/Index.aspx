<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/mp.Master" Inherits="System.Web.Mvc.ViewPage<JSON.ImageDetail>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="body" runat="server">
    <%=Html.Partial("image") %>
</asp:Content>
