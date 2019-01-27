import { Vue, Component } from 'vue-property-decorator'
import Card from '@/components/card.vue' // mpvue目前只支持的单文件组件
import CompB from '@/components/compb.vue' // mpvue目前只支持的单文件组件

const debug = require('debug')('log:Index')

import {mapState, mapActions} from 'vuex'

// 必须使用装饰器的方式来指定component
@Component({
  components: {
    Card,
    CompB, //注意，vue的组件在template中的用法，`CompB` 会被转成 `comp-b`
  },
  computed: {
    ...mapState({
      channels: state=>state['index'].channels
    })
  },
  methods: {
    ...mapActions({
      getSetting: 'index/getSetting'
    })
  }
})
// @connect
class Index extends Vue {
  ver: number = 123

  get list(){
    return [1,2,3,4]
  }

  onShow() { // 小程序 hook
    debug('onShow')
    this['getSetting']();
  }

  mounted() { // vue hook
    debug('mounted')
  }

  handleClick():number{
    console.log('触发了点击事件')
    return 100
  }

  goDetail(): void{
    wx.navigateTo({
      url: '/pages/detail/main'
    });
  }
}

export default Index
