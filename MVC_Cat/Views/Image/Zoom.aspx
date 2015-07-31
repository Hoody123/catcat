<%@ Page Language="C#" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<!DOCTYPE html>

<html>
<head runat="server">
    <title>查看大图</title>
</head>
<body>
    <img src="<%=Tools.ImageServerHost+"/"+ViewBag.Hash+".jpg" %>" />
</body>
</html>
