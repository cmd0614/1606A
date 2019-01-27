import { Vue, Component, Prop } from 'vue-property-decorator'

// 必须使用装饰器的方式来指定component
@Component({
  props: ['list']
})
class List extends Vue {
  // @Prop() list;
  msg: string = 'hello detail'

  mounted() { // vue hook
     console.log('list...')
  }

  onShow() {
    console.log('list...', this['list'])
  }
}
export default List
