/// <reference path="TitleDialog.js" />
/// <reference path="../jquery.js" />
/// <reference path="MessageBox.js" />
/// <reference path="Dialog.js" />
MPCreateImageDialog =
    {
        //New: function (imageSrc, title, description, isEdit, source, packageID, packageTitle)
        //{
        New: function (options)
        {
            var strVar = "";
            strVar += "<div class=\"dialog-mask\">";
            strVar += "    <div class=\"dialog-box\">";
            strVar += "        <div class=\"dialog-title\">";
            strVar += "            <span class=\"text\">{0}<\/span>".Format(options.title);
            strVar += "            <div class=\"dialog-close\">";
            strVar += "            <\/div>";
            strVar += "        <\/div>";
            strVar += "        <div class=\"dialog-content\">";
            strVar += "            <div class=\"create-image-dialog\">";
            strVar += "                <div class=\"message\">";
            strVar += "                </div>";
            strVar += "                <div class=\"preview\">";
            strVar += "                    <img src=\"{0}\" width=\"180\">".Format(options.previewUrl);
            strVar += "                <\/div>";
            strVar += "                <div class=\"right\">";
            strVar += "                    <h3>图包</h3>";
            strVar += "                    <div class=\"package-list\">";
            strVar += "                        <div class=\"current\">";
            strVar += "                            <div class=\"name\">&nbsp;<\/div>";
            strVar += "                            <div class=\"arrow\"><\/div>";
            strVar += "                        <\/div>";
            strVar += "                        <div class=\"drop-list\">";
            strVar += "                            <div class=\"selections\"><\/div>";
            strVar += "                            <div class=\"filtrate\">";
            strVar += "                                <div class=\"create\"><\/div>";
            strVar += "                            <\/div>";
            strVar += "                            <div class=\"filter\">";
            strVar += "                                <input type=\"text\" placeholder=\"快速筛选/创建图包\">";
            strVar += "                            <\/div>";
            strVar += "                        <\/div>";
            strVar += "                    <\/div>";
            strVar += "                     <div class=\"seperator\"></div>";
            strVar += "                     <h3 >描述</h3>";
            strVar += "                    <div class=\"description\">";
            strVar += "                        <textarea>{0}<\/textarea>".Format(options.description);
            strVar += "                        <div class=\"tip\">";
            strVar += "                            给图片添加 #标签#，可以更好地整理图片哦~";
            strVar += "                        <\/div>";
            strVar += "                    <\/div>";
            if (options.canEdit == true)
            {
                strVar += "                     <div class=\"seperator\"></div>";
                strVar += "                     <h3>来自</h3>";
                strVar += "                     <input class=\"source\"  type=\"text\" value=\"{0}\">".Format(options.source);
            }
            strVar += "                <\/div>";
            strVar += "            <\/div>";
            strVar += "        <\/div>";
            strVar += "        <div class=\"dialog-btns\">";
            if (options.canEdit == true)
            {
                strVar += "            <div class=\"delete\">删除<\/div>";
            }
            strVar += "            <div class=\"ok\">确认<\/div>";
            strVar += "            <div class=\"cancel\">取消<\/div>";
            strVar += "        <\/div>";
            strVar += "    <\/div>";
            strVar += "<\/div>";

            var dialog = MPTitleDialog.New(strVar);
            var description = dialog.Content.find(".description textarea");//描述
            var bCurrent = dialog.Content.find(".package-list");//当前图标按钮
            var dropList = dialog.Content.find(".drop-list");//点击后弹出列表
            var select = dialog.Content.find(".selections");//图包列表
            var filterate = dialog.Content.find(".filtrate");//筛选栏输入后显示的内容
            var filterSearch = dialog.Content.find(".filter input");//筛选栏
            var source = dialog.Content.find(".source");//来源处
            dialog.onOK = null;
            dialog.onDelete = null;
            dialog.description = "";
            dialog.packageId = 0;
            dialog.source = "";

            //获取图包
            $.post(host + "/ajax/query-packages", {}, function (data)
            {
                if (data.code == 0)
                {
                    var packagelist = data.packages;
                    var length = packagelist.length;
                    for (var i = 0; i < length; i++)
                    {
                        var option = $("<div/>").addClass("package");
                        option.text(packagelist[i].title);
                        option.attr("data-package-id", packagelist[i].id);
                        select.append(option);

                        //选中默认图包
                        if(packagelist[i].id==options.defaultPackageId)
                        {
                                bCurrent.attr("data-package-id",packagelist[i].id);
                                bCurrent.find(".name").text(packagelist[i].title);
                        }
                    }
                    //if (options.canEdit == true)
                    //{
                    //    bCurrent.attr("data-package-id", packageID);
                    //    bCurrent.find(".name").text(packageTitle);
                    //}
                    //else if (packagelist.length != 0)
                    //{
                    //    bCurrent.attr("data-package-id", packagelist[0].id);
                    //    bCurrent.find(".name").text(packagelist[0].title);
                    //}
                }
            }, "json");

            //检查是否重复
            if (options.check != null)
            {
                $.post(host + "/ajax/check", options.check, function (data)
                {
                    if(data.code==0 && data.packages.length!=0)
                    {
                        var str = "<span>图包</span>";
                        for (var i = 0,n=data.packages.length; i < n; i++)
                        {
                            str += "<a href=\"{0}\">{1}</a>".Format(host+"/package/"+data.packages[i].id,data.packages[i].title);
                        }
                        str += "<span>里已经有这张图片了</span>";
                        var message = dialog.Content.find(".message");
                        message.html(str);
                        message.show();
                    }
                }, "json");
            }

            var dropListHide = function ()
            {
                filterate.hide();
                select.show();
                filterSearch.val("");
            }

            MPPopUpMenu(bCurrent, dropList, dropListHide);

            dropList.on("click", ".package", function (e)
            {
                var a = $(this);
                bCurrent.attr("data-package-id", a.attr("data-package-id"));
                bCurrent.find(".name").text(a.text());
                dropList.hide();
                e.stopPropagation();
            });

            filterate.find(".create").click(function ()
            {
                var a = $(this);
                if (a.text == null)
                {
                    return;
                }
                $.post(host + "/ajax/create-package", { title: MPHtmlEncode(filterSearch.val()) }, function (data)
                {
                    if (data.code == 0)
                    {
                        bCurrent.attr("data-package-id", data.packageid);
                        bCurrent.find(".name").text(filterSearch.val());

                        var option = $("<div/>").addClass("package");
                        option.text(filterSearch.val());
                        option.attr("data-package-id", data.packageid);
                        select.append(option);//将新的选项添加到select中
                        dropListHide();
                        dropList.hide();
                    }
                    else
                    {
                        MPMessageBox.New("warn", data.msg);
                    }
                }, "json");
            })

            filterSearch.keyup(function ()
            {
                var val = $.trim(filterSearch.val());
                if (val == "")
                {
                    select.show();
                    filterate.hide();
                    return;
                }
                select.hide();
                filterate.show();

                //清空快速搜素列表
                filterate.find(".package").remove();
                //获取当前图包列表
                var packageList = select.find(".package");
                if (packageList.length == 0)
                {
                    filterate.find(".create").text("新建图包---" + val);
                }
                else
                {
                    packageList.each(function ()
                    {
                        if ($(this).text().indexOf(val) != -1)
                        {
                            //找到了之后就复制一个放入候选列表
                            filterate.append($(this).clone());
                        }
                        else
                        {
                            filterate.find(".create").text("新建图包---" + val);
                        }
                    });
                }
            });

            dialog.ButtonOK.click(function ()
            {
                var packageid=bCurrent.attr("data-package-id");   
                if (packageid == "" || packageid == undefined)
                {
                    MPMessageBox.New(MPMessageBox.Icons.Warn, "请选择一个图包,如果没有图包请新建一个图包!");
                    return;
                }
                dialog.description = description.val();
                dialog.packageId = packageid;
                localStorage["default-package-id"] = packageid;

                if (options.canEdit == true)
                {
                    dialog.source = source.val();
                }
                if (dialog.onOK != null)
                {
                    dialog.onOK();
                }
                else
                {
                    dialog.Close();
                }
            })

            dialog.Content.find(".cancel").click(function ()
            {
                dialog.Close();
            })//取消按钮

            dialog.Content.find(".delete").click(function ()
            {
                if (dialog.onDelete != null)
                {
                    dialog.onDelete();
                }
                //获取对话框的信息,包括图包id,描述,图片来源,这个功能可以写成一个函数
                //然后就是触发onDelete
            })

            return dialog;
        }
    }