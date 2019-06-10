// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/css/reset.css'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import store from './vuex'
import remAndPhoneConfig from './common/js/rem'
//import FastClick from 'fastclick'

//FastClick.attach(document.body)
Vue.use(iView);
remAndPhoneConfig();

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})

/* 
package.json 以下几个是koa依赖，不需要可以删掉
    "koa-history-api-fallback": "^0.2.0",
    "koa": "^2.0.0",
    "koa-body": "^4.1.0",
    "koa-cors": "0.0.16",
    "koa-jwt": "^3.5.1",
    "koa-router": "^7.0.0",
    "koa-static": "^4.0.3",
    "mime": "^1.3.4",
    "mysql": "^2.17.1",
    "mysql2": "^1.6.5",
    "sequelize": "^5.8.5"
*/