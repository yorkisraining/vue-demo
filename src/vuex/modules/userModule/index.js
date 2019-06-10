//引入四个子文件
import state from './state';
import * as getters from './getters'; //把getters中的所有的导出模块都引入
import * as mutations from './mutations'; //把mutations中的所有导出的方法都引入
import * as actions from './actions';

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}