// models/adminUser.js
const db = require('../config/db'),
    adminUserModel = '../schemas/adminUser.js',
    pageModel = '../schemas/pagelist.js',
    TodoListDb = db.Todolist;

const adminUser = TodoListDb.import(adminUserModel),
    page = TodoListDb.import(pageModel);

/* 用户名登录 */
const findAdminUser = async function(ctx) {
    const info = await adminUser.findOne({
        where: {
            username: ctx.username
        }
    })

    return info;
}

/* 
发布文章
1 成功
0 失败
*/
const addPage = async function(ctx) {
    const info = await page.create({
        title: ctx.title,
        brief: ctx.brief,
        time: ctx.time,
        context: ctx.context
    })

    return 1;
}

module.exports = {
    findAdminUser,
    addPage,
}