import Vue from 'vue';
import Vuex from 'vuex';
// vuex日志插件，可以记录每一步mutation
import createLogger from 'vuex/dist/logger';
// 引入模块
import app from './modules/app';
Vue.use(Vuex);

// 生成store实例
export default new Vuex.Store({
  modules: {
    app
  },
  state: {
    a: 100,
    b: 200
  },
  plugins: [createLogger()]
})
