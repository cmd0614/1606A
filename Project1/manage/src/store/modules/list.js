import {getUserList, updateUserInfo, deleteUser, modifyRoler} from '@/api/user'

const state = {
  list: []
}

const mutations = {
  updateList(state, list){
    state.list = list;
  }
}

const actions = {
  // 获取用户列表
  getUserList({commit}, query){
    return new Promise((resolve, reject)=>{
      getUserList(query).then(res=>{
        console.log('res...', res);
        if (res.data.code == 1){
          commit('updateList', res.data.data.list);
          resolve();
        }else{
          reject(res.data.msg);
        }
      }).catch(err=>{
        reject(err);
      })
    })
  },
  // 更新用户信息
  updateUserInfo({commit}, data){
    return new Promise((resolve, reject)=>{
      updateUserInfo(data).then(res=>{
        if (res.data.code == 1){
          resolve(res.data.msg);
        }else{
          reject(res.data.msg);
        }
      }).catch(err=>{
        reject(err);
      })
    })
  },
  // 删除用户
  deleteUser({commit}, data){
    return new Promise((resolve, reject)=>{
      deleteUser(data).then(res=>{
        if (res.data.code == 1){
          resolve(res.data.msg);
        }else{
          reject(res.data.msg);
        }
      }).catch(err=>{
        reject(err);
      })
    })
  },
  // 为用户分配角色
  modifyRoler(context, data){
    return new Promise((resolve, reject)=>{
      modifyRoler(data).then(res=>{
        if (res.data.code == 1){
          resolve(res.data.msg);
        }else{
          reject(res.data.msg);
        }
      }).catch(err=>{
        reject(err);
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
