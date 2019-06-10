// controller/user.js
const user = require('../models/user'),
    fs = require('fs');

/* 
注册用户
-1 已存在
0 失败
1 成功
*/
const postAddUser = async function(ctx) {
    const data = ctx.request.body;
    /* file = ctx.request.files.file,
        fileName = new Date().getTime() + '.png';

    fs.writeFile(`./img/${fileName}`, ' ', (err) => {
        console.log('err::', err);
    });

    const reader = fs.createReadStream(file.path);
    const write = fs.createWriteStream(`./img/${fileName}`);

    reader.pipe(write); */

    const info = await user.signinUser({
        username: data.username,
        password: data.password,
        /* file: fileName */
    })

    if (info == 1) {
        ctx.body = {
            success: true
        }
    } else if (info == 0) {
        ctx.body = {
            success: false,
            info: '注册失败'
        }
    } else if (info == -1) {
        ctx.body = {
            success: false,
            info: '账号已存在'
        }
    }
}

//登录
const postLogin = async function(ctx) {
    const data = ctx.request.body,
        userInfo = await user.getUserByName(JSON.parse(data.jsonParams).data.username);

    if (userInfo != null) {
        if (userInfo.password === JSON.parse(data.jsonParams).data.password) {
            ctx.body = {
                success: true,
                id: userInfo.id
            }
        } else {
            ctx.body = {
                success: false,
                info: '用户名或密码错误!'
            }
        }
    } else {
        ctx.body = {
            success: false,
            info: '用户名或密码错误!'
        }
    }

}

module.exports = {
    postAddUser,
    postLogin
}