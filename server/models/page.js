// models/page.js
const db = require('../config/db'),
    pageModel = '../schemas/pagelist.js',
    commentModel = '../schemas/comment.js',
    TodoListDb = db.Todolist;

const Page = TodoListDb.import(pageModel),
    Comment = TodoListDb.import(commentModel);

/* 查找文章列表，分页 */
const findPage = async function(ctx) {
    const pageTotal = await TodoListDb.query(`SELECT COUNT(pagelist.id) as count FROM blog.pagelist;`),
        pageItems = await TodoListDb.query(`SELECT * FROM blog.pagelist limit ${(ctx.page - 1) * ctx.limit}, ${ctx.limit};`)

    return ({
        'item': pageItems[0],
        'total': pageTotal[0]
    });
}

/* 文章详情 */
const findAPage = async function(ctx) {
    const onePage = await Page.findOne({
        where: {
            id: ctx.id
        }
    })
    return onePage;
}

/* 文章下的评论 */
const findComment = async function(ctx) {
    const comment = await Comment.findAll({
            where: {
                pageid: ctx.id
            },
            limit: ctx.limit,
            offset: (ctx.page - 1) * ctx.limit
        }),
        total = await TodoListDb.query(`select count(comment.id) as count from comment where comment.pageid = ${ctx.id};`);

    return ({
        comment: comment,
        total: total[0][0].count
    });
}

/* 发表评论 */
const addComments = async function(ctx) {
    const info = await Comment.create({
        pageid: ctx.id,
        context: ctx.context,
        time: ctx.time
    })

    return 1;
}

module.exports = {
    findPage,
    findAPage,
    findComment,
    addComments,
}