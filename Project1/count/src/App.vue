<template>
  <div>
    <button @click="changeNum({payload: '+'})">+</button>
    <span>{{num}}</span>
    <span>日期：{{date}}</span>
    <button @click="changeNum({payload: '-'})">-</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
export default {
  computed: {
    ...mapState({
      num: state=>state.app.num
    }),
    ...mapGetters({
      date: 'app/date'
    })
  },
  mounted(){
    console.log(this.$store);
  },
  methods: {
    ...mapMutations({
      changeNumSync: 'app/changeNum'
    }),
    ...mapActions({
      changeNumAsync: 'app/changeNumAsync'
    }),
    changeNum(type){
      this.changeNumAsync({payload: type})
      .then(res=>{
        console.log('操作完成了！');
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
