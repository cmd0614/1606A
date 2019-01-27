<template>
  <div>
    <p>我是Detail页面</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
// 必须使用装饰器的方式来指定component
@Component({})
class Detail extends Vue {
  mounted() { // vue hook
  }
}

export default Detail
</script>

<style lang="less" scoped>

</style>
