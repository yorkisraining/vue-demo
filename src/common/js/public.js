/* 
 * 请求封装公共方法
 */
import axios from 'axios'
import qs from 'qs' //序列化字符串

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let token = localStorage.getItem('token');

// 请求拦截器
axios.interceptors.request.use(config => {
    if (token) {
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        config.headers.Authorization = token;
    }
    return config;
}, error => {
    return Promise.reject(error);
})

// 响应拦截器，拦截401错误，并重新跳入登页重新获取token
axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response) {
        switch (error.response.status) {
            case 401:
                router.replace({
                    path: 'login',
                    query: {
                        redirect: router.currentRoute.fullPath
                    } //登录成功后跳入浏览的当前页面
                })
                break;
            default:
                break;
        }
    }
    return Promise.reject(error);
})

function getPostParams(subbody) {
    subbody = subbody || {};
    let loginUserId = '',
        token = '';
    if (localStorage.getItem('userId')) {
        loginUserId = localStorage.getItem('userId');
    }
    subbody.loginUserId = loginUserId;
    const postParams = {
        jsonParams: {
            loginUserId: loginUserId,
            token: token,
            data: subbody
        }
    }
    postParams.jsonParams = JSON.stringify(postParams.jsonParams);
    return postParams;
}

// 发送请求及接收后处理
export const ajaxPost = (url, params, callback, errorCallback) => {
    axios.post(url, qs.stringify(getPostParams(params)))
        .then(function(response) {
            callback(response);
        })
        .catch(function(error) {
            if (errorCallback) {
                errorCallback(error)
            }
            console.log('服务器错误', error);
        })
}