// 模块中的数据
const state = {
  num: 1000
}

// 模块中同步的改变
const mutations = {
  changeNum(state, {payload}){
    state.num = payload=='+'?state.num+1: state.num-1
  }
}

export default {
  state,
  mutations
}
