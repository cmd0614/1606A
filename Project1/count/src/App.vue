<template>
  <div>
    <button @click="changeNum('+')">+</button>
    <span>{{this.$store.state.app.num}}</span>
    <button @click="changeNum('-')">-</button>
  </div>
</template>

<script>
export default {
  mounted(){
    console.log(this.$store);
  },
  methods: {
    changeNum(type){
      // this.$store.commit('changeNum', {payload: type});
      // 触发mutation
      // this.$store.commit({
      //   type: 'app/changeNum',
      //   payload: type
      // })
      // 触发action
      this.$store.dispatch({
        type: 'app/changeNumAsync',
        payload: type
      }).then(res=>{
        console.log('操作完成了！');
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
