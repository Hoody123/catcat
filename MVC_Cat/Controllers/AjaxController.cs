using System;
using System.Collections.Generic;
using System.Drawing;
using System.Dynamic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC_Cat.Controllers
{
    public class AjaxController : Controller
    {
        MPUser CheckLogin()
        {
            MPUser user = Session["user"] as MPUser;
            if (user == null)
            {
                throw new MiaopassNotLoginException();
            }
            return user;
        }
        public ActionResult Index(string act)
        {
            dynamic okMsg = new ExpandoObject();
            okMsg.code = 0;
            okMsg.msg = "ok";

            try
            {
                switch (act)
                {
                    #region login 登录
                    case "login":
                        {
                            if (Session["user"] != null)
                            {
                                throw new MiaopassAlreadyLoginException();
                            }
                            string email = Tools.GetStringFromRequest(Request.Form["email"]).Trim();
                            string password = Tools.GetStringFromRequest(Request.Form["password"]);
                            var res = DB.SExecuteScalar("select id from user where email=? and password=?", email, Tools.SHA256Hash(password));
                            if (res == null)
                                throw new MiaopassLoginErrorException();

                            var user = new MPUser(Convert.ToInt32(res));
                            Session["user"] = user;
                            string cookie = user.ID + "_" + Tools.BytesToString(Guid.NewGuid().ToByteArray());
                            DB.SExecuteNonQuery("insert into login_cookie (userid,cookievalue,expire) values (?,?,?)", user.ID, cookie, DateTime.Now.AddMonths(1));
                            okMsg.cookie = cookie;
                        }
                        break;
                    #endregion
                    #region signup-email 申请邮箱注册
                    case "signup-email":
                        {
                            if (Session["user"] != null)
                            {
                                throw new MiaopassAlreadyLoginException();
                            }

                            string email = Server.HtmlDecode(Tools.GetStringFromRequest(Request.Form["email"]).Trim());
                            if (MPUser.IsEmailExist(email))
                            {
                                throw new MiaopassEmailConflictException();
                            }

                            var res = DB.SExecuteScalar("select token from signup_email where email=? and expire>?", email, DateTime.Now);
                            if (res == null)
                            {
                                string token = Tools.BytesToString(Guid.NewGuid().ToByteArray());

                                DB.SExecuteNonQuery("delete from signup_email where email=?", email);
                                DB.SExecuteNonQuery("insert into signup_email (email,token,expire) values (?,?,?)", email, token, DateTime.Now.AddDays(1));

                                Mail.SendConfirmSignupEmail(email, token);
                            }
                            else
                            {
                                Mail.SendConfirmSignupEmail(email, (string)res);
                            }
                        }
                        break;
                    #endregion
                    #region confirm-signup-email 确认邮箱注册
                    case "confirm-signup-email":
                        {
                            if (Session["user"] != null)
                            {
                                throw new MiaopassAlreadyLoginException();
                            }

                            string email = Server.HtmlDecode(Tools.GetStringFromRequest(Request.Form["email"]));
                            string username = Server.HtmlDecode(Tools.GetStringFromRequest(Request.Form["username"]));
                            string password = Server.HtmlDecode(Tools.GetStringFromRequest(Request.Form["password"]));

                            var res = DB.SExecuteScalar("select email from signup_email where email=? and expire>?", email, DateTime.Now);
                            if (res == null)
                            {
                                throw new MiaopassException("邮箱未申请注册或注册链接已失效,请重新注册");
                            }

                            MPUser.Create(username, Tools.SHA256Hash(password), email);
                            DB.SExecuteNonQuery("delete from signup_email where email=?", email);
                        }
                        break;
                    #endregion
                    #region create-package 创建新图包
                    case "create-package":
                        {
                            string packageTitle = Tools.GetStringFromRequest(Request.Form["title"]);
                            packageTitle = packageTitle.Trim();
                            if (packageTitle == "")
                            {
                                throw new MiaopassException("图包标题不能为空");
                            }
                            var user = Session["user"] as MPUser;
                            if (user == null)
                            {
                                throw new MiaopassNotLoginException();
                            }

                            okMsg.packageid = MPPackage.Create(user.ID, packageTitle);
                        }
                        break;
                    #endregion
                    #region upload-begin 上传文件开始
                    case "upload-begin":
                        {
                            if (Session["user"] == null)
                            {
                                throw new MiaopassNotLoginException();
                            }

                            string tempFileName = Tools.BytesToString(Guid.NewGuid().ToByteArray());

                            okMsg.name = tempFileName;
                        }
                        break;
                    #endregion
                    #region upload-chunk 上传文件分块
                    case "upload-chunk":
                        {
                            CheckLogin();

                            int chunks = Tools.GetInt32FromRequest(Request.QueryString["chunks"]);
                            int chunk = Tools.GetInt32FromRequest(Request.QueryString["chunk"]);
                            string tempFileName = Tools.GetStringFromRequest(Request.QueryString["name"]);

                            //try
                            //{
                            using (FileStream fs = System.IO.File.Create(Server.MapPath("~/MP_Temp/" + tempFileName + "_" + chunk)))
                            {
                                fs.Write(Request.InputStream);
                            }
                            //}
                            //catch
                            //{
                            //    throw new MiaopassUploadErrorException();
                            //}

                            if (chunk == (chunks - 1))
                            {
                                //try
                                //{
                                string mergerName = Server.MapPath("~/MP_Done/" + tempFileName);
                                using (var merger = System.IO.File.Create(mergerName))
                                {
                                    for (int i = 0; i < chunks; i++)
                                    {
                                        string fragmentName = Server.MapPath("~/MP_Temp/" + tempFileName + "_" + i);
                                        using (var fragment = System.IO.File.OpenRead(fragmentName))
                                        {
                                            merger.Write(fragment);
                                        }
                                        System.IO.File.Delete(fragmentName);
                                    }
                                    int fileid= MPFile.Create(merger);
                                    okMsg.file = new JSON.File(new MPFile(fileid));
                                }
                                System.IO.File.Delete(mergerName);
                                //}
                                //catch
                                //{
                                //    throw new MiaopassUploadErrorException();
                                //}
                            }
                        }
                        break;
                    #endregion
                    #region create-image 创建上传图片
                    case "create-image":
                        {
                            MPUser user = Session["user"] as MPUser;
                            if (user == null)
                                throw new MiaopassNotLoginException();
                            int packageId = Tools.GetInt32FromRequest(Request.Form["package_id"]);
                            string md5 = Tools.GetStringFromRequest(Request.Form["file_hash"]);
                            string description = Server.HtmlDecode(Tools.GetStringFromRequest(Request.Form["description"]));

                            MPPackage package = new MPPackage(packageId);
                            MPFile file = new MPFile(md5);
                            MPImage.Create(package.ID, file.ID, user.ID, 0, "", description);
                        }
                        break;
                    #endregion
                    #region logout 退出登录
                    case "logout":
                        {
                            Session["user"] = null;
                        }
                        break;
                    #endregion
                    #region query-packages 查询自己的图包
                    case "query-packages":
                        {
                            if (Session["user"] == null)
                                throw new MiaopassNotLoginException();

                            MPUser user = Session["user"] as MPUser;

                            List<object> list = new List<object>();
                            var res = DB.SExecuteReader("select id from package where userid=?", user.ID);
                            foreach (var item in res)
                            {
                                try
                                {
                                    MPPackage p = new MPPackage(Convert.ToInt32(item[0]));
                                    list.Add(new { id = p.ID, title = p.Title });
                                }
                                catch { }
                            }

                            okMsg.packages = list;
                        }
                        break;
                    #endregion
                    #region reset-password 重置密码
                    case "reset-password":
                        {
                            string email = Tools.GetStringFromRequest(Request.Form["email"]);
                            if (MPUser.IsEmailExist(email) == false)
                            {
                                throw new MiaopassException("无效邮箱地址");
                            }

                            string token = "";
                            var res = DB.SExecuteScalar("select token from reset_password where email=?", email);
                            if (res != null)
                            {
                                token = (string)res;
                            }
                            else
                            {
                                token = Tools.BytesToString(Guid.NewGuid().ToByteArray());
                                DB.SExecuteNonQuery("insert into reset_password (email,expire,token) values (?,?,?)", email, DateTime.Now.AddDays(1), token);
                            }

                            Mail.SendResetPasswordEmail(email, token);
                        }
                        break;
                    #endregion
                    #region praise-image 赞图片
                    case "praise-image":
                        {
                            var user = CheckLogin();
                            var image = new MPImage(Convert.ToInt32(Tools.GetInt32FromRequest(Request.Form["image_id"])));

                            DB.SExecuteNonQuery("insert ignore into praise (userid,type,info) values (?,?,?)", user.ID, MPPraiseTypes.Image, image.ID);
                        }
                        break;
                    #endregion
                    #region unpraise-image 取消赞图片
                    case "unpraise-image":
                        {
                            var user = CheckLogin();
                            var image = new MPImage(Convert.ToInt32(Tools.GetInt32FromRequest(Request.Form["image_id"])));

                            DB.SExecuteNonQuery("delete from praise where userid=? and type=? and info=?", user.ID, MPPraiseTypes.Image, image.ID);
                        }
                        break;
                    #endregion
                    #region resave 转存图片
                    case "resave":
                        {
                            var user = CheckLogin();
                            var image = new MPImage(Tools.GetInt32FromRequest(Request.Form["image_id"]));
                            var package = new MPPackage(Tools.GetInt32FromRequest(Request.Form["package_id"]));
                            var description = Tools.GetStringFromRequest(Request.Form["description"]);

                            MPImage.Create(package.ID, image.FileID, user.ID, image.ID, image.Url, description);
                        }
                        break;
                    #endregion
                    #region pick 收集图片
                    case "pick":
                        {
                            var user = CheckLogin();
                            var package = new MPPackage(Tools.GetInt32FromRequest(Request.Form["package_id"]));
                            var description = Tools.GetStringFromRequest(Request.Form["description"]);
                            var source = Tools.GetStringFromRequest(Request.Form["source"]);
                            var from = Tools.GetStringFromRequest(Request.Form["from"]);

                            DB.SExecuteNonQuery("insert into task_download(packageid,userid,source,`from`,description) values (?,?,?,?,?)", package.ID, user.ID, source, from, description);
                        }
                        break;
                    #endregion
                    #region add-comment 添加评论
                    case "add-comment":
                        {
                            DateTime lastTime = Convert.ToDateTime(Session["lastAddCommentTime"]);
                            DateTime now = DateTime.Now;
                            if ((now - lastTime).TotalSeconds < 20)
                            {
                                throw new MiaopassException("发表评论过于频繁,请于20秒后重试");
                            }
                            var user = CheckLogin();
                            int imageId = Tools.GetInt32FromRequest(Request.Form["image_id"]);
                            string text = Tools.GetStringFromRequest(Request.Form["text"]);

                            var image = new MPImage(imageId);

                            int commentId = MPComment.Create(image.ID, user.ID, text);
                            okMsg.comment = new JSON.Comment(new MPComment(commentId));
                        }
                        break;
                    #endregion
                    #region delete-comment 删除评论
                    case "delete-comment":
                        {
                            var user = CheckLogin();
                            int commentId = Tools.GetInt32FromRequest(Request.Form["id"]);
                            var comment = new MPComment(commentId);
                            if (comment.UserID != user.ID)
                            {
                                throw new MiaopassException("无操作权限");
                            }

                            DB.SExecuteNonQuery("delete from comment_mention where commentid=?", commentId);
                            DB.SExecuteNonQuery("delete from comment where id=?", commentId);
                        }
                        break;
                    #endregion
                    #region delete-image 删除图片
                    case "delete-image":
                        {
                            var user = CheckLogin();
                            var imageId = Tools.GetInt32FromRequest(Request.Form["id"]);
                            var image = new MPImage(imageId);
                            if (user.ID != image.UserID)
                                throw new MiaopassException("无操作权限");
                            image.Delete();
                        }
                        break;
                    #endregion
                    #region delete-package 删除图包
                    case "delete-package":
                        {
                            var user = CheckLogin();
                            var packageId = Tools.GetInt32FromRequest(Request.Form["id"]);
                            var package = new MPPackage(packageId);
                            if (package.UserID != user.ID)
                                throw new MiaopassException("无操作权限");

                            package.Delete();
                        }
                        break;
                    #endregion
                    #region edit-image 编辑图片
                    case "edit-image":
                        {
                            var user = CheckLogin();
                            var imageId = Tools.GetInt32FromRequest(Request.Form["id"]);
                            var packageId = Tools.GetInt32FromRequest(Request.Form["package_id"]);
                            var description = Tools.GetStringFromRequest(Request.Form["description"]);
                            var source = Tools.GetStringFromRequest(Request.Form["source"]);

                            var image = new MPImage(imageId);
                            if (image.UserID != user.ID)
                                throw new MiaopassException("无权限操作");

                            var package = new MPPackage(packageId);

                            image.Edit(packageId, description, source);
                        }
                        break;
                    #endregion
                    #region edit-package 编辑图包
                    case "edit-package":
                        {
                            var user = CheckLogin();
                            var id = Tools.GetInt32FromRequest(Request.Form["id"]);
                            var title = Tools.GetStringFromRequest(Request.Form["title"]);
                            var description = Tools.GetStringFromRequest(Request.Form["description"]);

                            var package = new MPPackage(id);
                            package.Title = title;
                            package.Description = description;
                        }
                        break;
                    #endregion
                    #region follow-package 关注图包
                    case "follow-package":
                        {
                            int packageId = Tools.GetInt32FromRequest(Request.Form["package_id"]);
                            var user = CheckLogin();
                            var package = new MPPackage(packageId);
                            DB.SExecuteNonQuery("insert ignore into following (userid,type,info) values (?,?,?)", user.ID, MPFollowingTypes.Package, packageId);
                        }
                        break;
                    #endregion
                    #region unfollow-package 取消关注图包
                    case "unfollow-package":
                        {
                            int packageId = Tools.GetInt32FromRequest(Request.Form["package_id"]);
                            var user = CheckLogin();
                            var package = new MPPackage(packageId);
                            DB.SExecuteNonQuery("delete from following where userid=? and type=? and info=?", user.ID, MPFollowingTypes.Package, packageId);
                        }
                        break;
                    #endregion
                    #region follow-user 关注用户
                    case "follow-user":
                        {
                            int userId = Tools.GetInt32FromRequest(Request.Form["user_id"]);
                            var user = CheckLogin();
                            var followUser = new MPUser(userId);
                            DB.SExecuteNonQuery("insert ignore into following (userid,type,info) values (?,?,?)", user.ID, MPFollowingTypes.User, userId);
                        }
                        break;
                    #endregion
                    #region unfollow-user 取消关注用户
                    case "unfollow-user":
                        {
                            int userId = Tools.GetInt32FromRequest(Request.Form["user_id"]);
                            var user = CheckLogin();
                            var followUser = new MPUser(userId);
                            DB.SExecuteNonQuery("delete from following where userid=? and type=? and info=?", user.ID, MPFollowingTypes.User, userId);
                        }
                        break;
                    #endregion
                    #region setting-basic 设置基本信息
                    case "setting-basic":
                        {
                            var user = CheckLogin();
                            var form = Request.Form;

                            if (form["name"] != null)
                            {
                                var name = Tools.GetStringFromRequest(form["name"]);
                                user.Name = name;
                            }

                            if (form["description"] != null)
                            {
                                var description = Tools.GetStringFromRequest(form["description"]);
                                user.Description = description;
                            }

                            if (form["avt-hash"] != null)
                            {
                                var hash = Tools.GetStringFromRequest(form["avt_hash"]);
                                var offsetX = Tools.GetInt32FromRequest(form["avt_offset_x"]);
                                var offsetY = Tools.GetInt32FromRequest(form["avt_offset_y"]);
                                var size = Tools.GetInt32FromRequest(form["avt_size"]);

                                var file = new MPFile(hash);
                                using (var s = OssFile.Open(file.MD5))
                                {
                                    using (var bmp = Image.FromStream(s))
                                    {
                                        using (var avt = bmp.Crop(offsetX, offsetY, size, size, 150, 150))
                                        {
                                            OssFile.Create(string.Format("avt/{0}_big", user.ID), avt.SaveAsJpeg());
                                        }
                                        using (var avt = bmp.Crop(offsetX, offsetY, size, size, 75, 75))
                                        {
                                            OssFile.Create(string.Format("avt/{0}", user.ID), avt.SaveAsJpeg());
                                        }
                                    }
                                }
                                user.DefaultHead = false;
                            }
                        }
                        break;
                    #endregion
                    #region setting-password 设置密码
                    case "settiong-password":
                        {
                            var user = CheckLogin();
                            var oldPassword = Tools.GetStringFromRequest(Request.Form["old_password"]);
                            var newPassword = Tools.GetStringFromRequest(Request.Form["new_password"]);

                            if(user.Password!=Tools.SHA256Hash(oldPassword))
                            {
                                throw new MiaopassException("旧密码错误");
                            }

                            user.Password = Tools.SHA256Hash(newPassword);
                        }
                        break;
                    #endregion
                }
            }
            catch (MiaopassException exception)
            {
                return Content(Tools.JSONStringify(new { code = exception.Code, msg = exception.Message }));
            }
            catch (Exception exception)
            {
                return Content(Tools.JSONStringify(new { code = 500, msg = exception.Message }));
            }

            return Content(Tools.JSONStringify(okMsg), "application/json");
        }

    }
}
