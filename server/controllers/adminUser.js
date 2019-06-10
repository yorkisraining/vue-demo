// controllers/adminUser.js
const adminUser = require('../models/adminUser');

/* 管理员登录 */
const postLoginByName = async function(ctx) {
    const info = await adminUser.findAdminUser(ctx.request.body);

    if (info != null) {
        ctx.body = {
            success: true
        }
    } else {
        ctx.body = {
            success: false,
            info: '用户名或密码错误'
        }
    }
}

/* 
发布文章
1 成功
0 失败
*/
const postAddPage = async function(ctx) {
    const info = await adminUser.addPage(ctx.request.body);

    if (info == 1) {
        ctx.body = {
            success: true
        }
    } else {
        ctx.body = {
            success: false,
            info: '发布失败'
        }
    }
}

module.exports = {
    postLoginByName,
    postAddPage,
}