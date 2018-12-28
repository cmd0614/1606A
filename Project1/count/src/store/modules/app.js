// 模块中的数据
const state = {
  num: 1000
}

// 派生的数据，会被缓存
const getters = {
  // 格式化时间 YYYY-MM-DD HH:MM:SS
  date(state){
    let date = new Date();
    let year = date.getFullYear(),
        month = (date.getMonth()+1).toString().padStart(2, '0'),
        day = date.getDate().toString().padStart(2, '0'),
        hour = date.getHours().toString().padStart(2, '0'),
        min = date.getMinutes().toString().padStart(2, '0'),
        sec = date.getSeconds().toString().padStart(2, '0');
    return `${year}-${month}-${day} ${hour}:${min}:${sec} - ${state.num}`;
  }
}

// 模块中同步的改变
const mutations = {
  changeNum(state, {payload}){
    state.num = payload=='+'?state.num+1: state.num-1
  }
}

// 模块中的异步改变
const actions = {
  changeNumAsync({commit}, action){
    // console.log('context....', context, action);
    // action中可以返回个promise，当异步操作完成之后通知组件
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        commit('changeNum', action)
        resolve();
      }, 1000);
    })
  }
}

export default {
  // 命名空间
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
