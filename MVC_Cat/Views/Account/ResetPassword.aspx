<%@ Page Title="" Language="C#"  Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<!DOCTYPE html>

<html">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
      <link href="<%=ResolveUrl("~/css/main.css") %>" rel="stylesheet" />
    <script src="<%=ResolveUrl("~/js/reset-password.js") %>"></script>
    <title>重置密码</title>
</head>
<body>
    <form method="post" action="?token=<%=ViewBag.Token %>">
        <div><span>新密码:</span><input type="password" id="password1" /></div>
        <div><span>确认密码:</span><input type="password" id="password2" /></div>
        <input type="submit" id="submit"/>
    </form>
</body>
</html>
