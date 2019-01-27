<template>
  <div>
    <p>{{msg}}</p>
    <p>我是列表组件</p>
    <p v-for="(item, index) in list" :key="index">{{item.content.title}}</p>
  </div>
</template>

<!-- <script lang="ts" src="./list.ts">

</script>
-->

<script>
export default {
  data(){
    return {
      msg: '123'
    }
  },

  props: ['list'],

  mounted(){
    console.log('mounted...');
  },

  created() {
    console.log('created...')
  }
}
</script>

<style lang="less" scoped>

</style>
