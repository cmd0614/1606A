import { Vue, Component } from 'vue-property-decorator'

import List from '@/components/list.vue'
import Card from '@/components/card.vue' // mpvue目前只支持的单文件组件


import {mapState, mapActions} from 'vuex'
const debug = require('debug')('log:Index')



// 必须使用装饰器的方式来指定component
@Component({
  components: {
    List,
    Card
  },
  computed: {
    ...mapState({
      channels: state=>state['index'].channels,
      newsList: state=>state['index'].newsList
    })
  },
  methods: {
    ...mapActions({
      getSetting: 'index/getSetting',
      getFeed: 'index/getFeed'
    })
  }
})
// @connect
class Index extends Vue {
  ver: number = 123
  current: number = 0

  // onShow() { // 小程序 hook
  //   debug('onShow')
  //   this['getSetting']().then(()=>{
  //     let appUrl = this['channels'][0].appUrl;
  //     this['getFeed'](appUrl)
  //   });
  // }

  // tab切换
  tabChange({target}){
    console.log('target...', target);
    this.current = target.key;
    // 获取当前tab的appUrl
    let appUrl = this['channels'][target.key].appUrl;
    this['getFeed'](appUrl)
  }
}

export default Index
