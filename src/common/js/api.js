/*
 * api接口统一管理
 */

// 环境配置
const environment = {
    onLine: 'http://www.build.com:8080/', //生产环境请求地址
    dev: 'http://192.168.3.229:3000/', //开发环境请求地址
    koa: '/',
}

// 接口前缀
let host = location.host,
    baseHost = '',
    baseURL = '';

if (host.indexOf('www.build.com') > -1) {
    // 线上环境
    baseHost = environment.onLine;
} else {
    // 1.1测试环境
    baseHost = environment.dev;
}

baseURL = baseHost;
//baseURL = environment.koa;

// 接口集合
export const apiUrl = {
    // 登录
    login: baseURL + 'auth/login',
    //table
    table: baseURL + 'page/getAllPage',
}