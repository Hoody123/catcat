using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

public enum MPFollowingTypes : byte
{
    /// <summary>
    /// 用户
    /// </summary>
    User = 0,
    /// <summary>
    /// 图包
    /// </summary>
    Package = 1
}
public enum MPPraiseTypes : byte
{
    /// <summary>
    /// 图片
    /// </summary>
    Image = 0,
    /// <summary>
    /// 图包
    /// </summary>
    Package = 1
}
public enum MPImageFromTypes : byte
{
    /// <summary>
    /// 自己上传
    /// </summary>
    Upload = 0,
    /// <summary>
    /// 采集自其他网站
    /// </summary>
    Pick = 1,
    /// <summary>
    /// 转采
    /// </summary>
    Repin = 2
}

public enum MPActivityTypes : byte
{
    /// <summary>
    /// 赞
    /// </summary>
    Praise=0,
    /// <summary>
    /// 转存
    /// </summary>
    Resave=1,
    /// <summary>
    /// 关注用户
    /// </summary>
    FollowUser=2,
    /// <summary>
    /// 关注图包
    /// </summary>
    FollowPackage=3,
    /// <summary>
    /// 通过其他图包转存
    /// </summary>
    ResaveThrough=4
}

public enum MPMessageTypes:byte
{
    /// <summary>
    /// 私信
    /// </summary>
    PrivateMail=0,
    /// <summary>
    /// 评论
    /// </summary>
    Comment=1,
    /// <summary>
    /// 被@了
    /// </summary>
    Mention=2,
    /// <summary>
    /// 回复
    /// </summary>
    Reply=3
}

public enum MPDownloadStates : byte
{
    /// <summary>
    /// 未开始
    /// </summary>
    Unstarting=0,
    /// <summary>
    /// 已开始
    /// </summary>
    Starting=1,
    /// <summary>
    /// 已完成
    /// </summary>
    Finished=2
}