import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import home from '@/views/home/home'

Vue.use(Router)

const router = new Router({
    mode: 'hash', //要配置成history https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90
    linkActiveClass: 'is-active',
    routes: [{
        path: '/',
        name: 'login',
        component: login
    }, {
        path: '/login',
        name: 'login',
        component: login
    }, {
        path: '/home',
        name: 'home',
        component: home
    }]
})

router.beforeEach((to, from, next) => {
    //if (to.matched.some(res => res.meta.requireAuth)) { // 验证是否需要登陆
    /* if (localStorage.getItem('token')) { // 查询本地存储信息是否已经登陆,判断键是否存在
        if (to.name == 'login' && from.name != 'login') {
            next({
                path: from.fullPath
            });
        }
        next();
    } else {
        this.$Message.warning({
            content: '您还未登录，请先登录!',
            onClose: () => {
                next({
                    path: '/login', // 未登录则跳转至login页面
                    query: {
                        redirect: from.fullPath
                    } // 登陆成功后回到当前页面，这里传值给login页面，to.fullPath为当前点击的页面
                })
            }
        });
    } */
    next();
    /* } else {
        next();
    } */
})

export default router