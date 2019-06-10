// models/user.js
const db = require('../config/db'),
    userModel = '../schemas/user.js',
    TodoListDb = db.Todolist;

const User = TodoListDb.import(userModel);

/* 
注册用户
-1 已存在
0 失败
1 成功
*/
const signinUser = async function(ctx) {
    let userInfo = false;
    const ifUserExit = await User.findOne({
        where: {
            username: ctx.username
        }
    })
    if (ifUserExit == null) {
        await User.create({
            username: ctx.username,
            password: ctx.password,
            /* avator: ctx.file */
        }).then((res) => {
            userInfo = 1;
        }).catch((err) => {
            userInfo = 0;
        })
    } else {
        userInfo = -1;
    }
    return userInfo;
}

const getUserByName = async function(name) {
    const userInfo = await User.findOne({
        where: {
            username: name
        }
    })
    return userInfo;
}

module.exports = {
    signinUser,
    getUserByName
}