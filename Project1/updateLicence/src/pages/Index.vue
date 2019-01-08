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

    <div class="bottom">
      <button id="cc">联系客服</button>
      <a href="tel: 17621526605">拨打电话</a>
    </div>
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
.bottom{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: .34rem;
  button,a{
    height: 30px;
    width: 100%;
    text-align: center;
    // background: #fff;
    position: relative;
  }
  button{
    border-top: 1px solid #999;
  }
  button::after,button::before{
    position: absolute;
    content: '';
    display: inline-block;
    height: 1px;
    width: 100%;
    left: 0;
    bottom: 0;
    background: #999;
  }
  button::before{
    bottom: 50%;
  }
}
@media screen and (-webkit-min-device-pixel-ratio: 2){
  .bottom button::before{
    transform: scaleY(0.5)
  }
}
@media screen and (-webkit-min-device-pixel-ratio: 3){
  .bottom button::after{
    transform: scaleY(0.33)
  }
}
</style>
