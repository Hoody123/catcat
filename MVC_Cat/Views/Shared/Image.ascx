<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl<JSON.ImageDetail>" %>
<%@ Import Namespace="System.Text.RegularExpressions" %>

<script runat="server">
    public string TagReplace(Match m)
    {
        var val = m.Value.Substring(1, m.Value.Length - 2).Trim();
        if (val == "")
            return m.Value;

        return string.Format("<a href=\"{0}/search/{1}\">{2}</a>", Tools.Host, Uri.EscapeDataString(val), m.Value);
    }
</script>

<div>
    <a href="<%=ResolveUrl("~/image/"+Model.id) %>">
        <img src="<%=Tools.ImageServerHost+"/"+Model.file.hash+"_fw236.jpg" %>" />
    </a>
    <div><%=Regex.Replace(Model.description, @"#.*?#", new MatchEvaluator(TagReplace))%></div>
    <a href="<%=ResolveUrl("~/user/"+Model.user.id) %>"><%=Model.user.name %></a>
    收集到
    <a href="<%=ResolveUrl("~/package/"+Model.package.id) %>"><%=Model.package.title %></a>
</div>
