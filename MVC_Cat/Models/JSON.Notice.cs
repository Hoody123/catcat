using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JSON
{
    namespace Notice
    {
        public class Notice
        {
            public string type { get; set; }
            public JSON.User user { get; set; }
            protected Notice(int userId)
            {
                user = new JSON.User(new MPUser(userId));
            }
        }

        namespace Activity
        {
            public class Praise : Notice
            {
                public JSON.Image image { get; set; }

                public Praise(int userId, int imageId)
                    : base(userId)
                {
                    type = "praise";
                    image = new JSON.Image(new MPImage(imageId));
                }
            }

            public class Resave : Notice
            {
                public JSON.Image image { get; set; }

                public Resave(int userId, int imageId)
                    : base(userId)
                {
                    type = "resave";
                    image = new JSON.Image(new MPImage(imageId));
                }
            }

            public class FollowUser : Notice
            {
                public FollowUser(int userId)
                    : base(userId)
                {
                    type = "follow_user";
                }
            }

            public class FollowPackage : Notice
            {
                public JSON.Package package { get; set; }

                public FollowPackage(int userId, int packageId)
                    : base(userId)
                {
                    type = "follow_package";
                    package = new JSON.Package(new MPPackage(packageId));
                }
            }

            public class ResaveThrough:Notice
            {
                public JSON.Image image { get; set; }
                public JSON.Package package { get; set; }
                public ResaveThrough(int userId,int imageId,int packageId):base(userId)
                {
                    type="resave_through";
                    image=new  JSON.Image(new MPImage(imageId));
                    package=new JSON.Package(new MPPackage(packageId));
                }
            }
        }

        namespace Message
        {
            public class Comment : Notice
            {
                public string comment { get; set; }
                public JSON.Image image { get; set; }
                public Comment(int userId, int commentId)
                    : base(userId)
                {
                    var c = new MPComment(commentId);
                    type = "comment";
                    comment = c.Text;
                    image = new JSON.Image(new MPImage(c.ImageID));
                }
            }

            public class Mention : Comment
            {
                public Mention(int userId, int commentId)
                    : base(userId, commentId)
                {
                    type = "mention";
                }
            }

            public class Reply : Comment
            {
                public Reply(int userId, int commentId)
                    : base(userId, commentId)
                {
                    type = "reply";
                }
            }
        }
    }
}