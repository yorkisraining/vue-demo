import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './modules/userModule'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        userModule,
    },
    strict: debug,
})