import Vue from 'vue'
import Vuex from 'vuex'
import cache from '@/utils/cache'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    logs: [],
    sidebarStatus: cache.getCookie('sidebarStatus') !== 'false'
}

// 自动引入和注册modules下的文件
const modulesFiles = require.context('./modules', false, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = modulesFiles(modulePath)
    modules[moduleName] = value.default
    return modules
}, {})

export default new Vuex.Store({
    state,
    mutations,
    actions,
    modules
})
