<template>
  <div>
    <h1>我是Index</h1>
    <Upload/>
    <ul>
      <li @click="typeClick">
        <span>服务类型</span>
        <span>{{form.type}}</span>
      </li>
      <CityPicker/>
    </ul>
    <section class="popup">
      <van-popup v-model="showType" position="bottom" overlay>
        <van-picker :columns="typeArray" show-toolbar title="服务类型" @cancel="cancelType" @confirm="confirmType"/>
      </van-popup>
    </section>

    <button @click="click">立即支付</button>
  </div>
</template>

<script>
import Upload from '@/components/Upload';
import CityPicker from '@/components/CityPicker';
import {isVip, goPay} from '@/api/index';

export default {
  data(){
    return {
      showType: false,
      typeArray: ['换驾照','补驾照'],
      form: {
        type: ''
      }
    }
  },
  components: {
    Upload,
    CityPicker
  },
  methods: {
    typeClick(){
      this.showType = true;
    },
    cancelType(){
      this.showType = false;
    },
    confirmType(value){
      this.form.type = value;
      this.cancelType();
    },
    click(){
      goPay();
    }
  },
  mounted(){
    isVip().then(res=>{
      console.log('isVip...', res);
    })
  }
}
</script>

<style lang="scss" scoped>
.popup{
  width: 100%;
}
</style>
