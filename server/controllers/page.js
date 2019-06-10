// controllers/page.js
const page = require('../models/page');

/* 查找文章，分页，page limit */
const postAllPage = async function(ctx) {
    const pageList = await page.findPage(JSON.parse(ctx.request.body.jsonParams).data);

    if (pageList.total != 0) {
        ctx.body = {
            success: true,
            data: pageList.item,
            total: pageList.total
        }
    } else {
        ctx.body = {
            success: false,
        }
    }
}

/* 文章详情 */
const postOnePage = async function(ctx) {
    const pageData = await page.findAPage(ctx.request.body);

    if (pageData != null) {
        ctx.body = {
            success: true,
            data: pageData
        }
    } else {
        ctx.body = {
            success: false,
        }
    }
}

/* 评论 */
const postComment = async function(ctx) {
    const comments = await page.findComment(ctx.request.body);

    if (comments != null) {
        ctx.body = {
            success: true,
            data: comments.comment,
            total: comments.total
        }
    } else {
        ctx.body = {
            success: false,
        }
    }
}

/* 添加评论 */
const postAddComment = async function(ctx) {
    const info = await page.addComments(ctx.request.body);

    if (info == 1) {
        ctx.body = {
            success: true,
        }
    } else {
        ctx.body = {
            success: false,
        }
    }
}

module.exports = {
    postAllPage,
    postOnePage,
    postComment,
    postAddComment,
}