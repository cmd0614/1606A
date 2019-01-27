import {getSetting, getFeed} from '@/data/index';

const state = {
  channels: [],
  newsList: []
}

const mutations = {
  updateChannels(state, channels){
    state.channels = channels;
  },
  updateNewsList(state, newsList){
    state.newsList = newsList;
  }
}

const actions = {
  async getSetting({commit}){
    let channels = await getSetting();
    console.log('channels', channels);
    commit('updateChannels', channels.channels[0]);
  },

  async getFeed({commit}, url){
    let news = await getFeed(url)
    news.data.forEach(item=>{
      // 格式化content
      item.content = JSON.parse(item.content)
    })
    commit('updateNewsList', news.data);
    console.log('news...', news);
  }
}

export default {
  namespaced: true,
  mutations,
  state,
  actions
}
