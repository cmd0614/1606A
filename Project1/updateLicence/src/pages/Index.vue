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

    <div>
      <!-- accept设置为*号会在客户端上卡顿，最好用逗号连接 -->
      <input type="file" accept="image/png,image/jpg,image/jpeg,image/gif" @change="uploadFile">
      上传图片
    </div>

    <canvas id="canvas"></canvas>

    <button @click="click">立即支付</button>
    <router-link to="/address">跳转地址</router-link>
    <div class="bottom">
      <button id="cc">联系客服</button>
      <a href="tel: 17621526605">拨打电话</a>
    </div>
  </div>
</template>

<script>
import Upload from '@/components/Upload';
import CityPicker from '@/components/CityPicker';
import {isVip, goPay, uploadBase64} from '@/api/index';

export default {
  name:'Index',
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
    },
    uploadFile(e){
      console.log('file...', e.target.files[0].size);
      let file = e.target.files[0];
      // 先判断图片是否过大
      if (file.size > 30*1024){
        // 转成base64
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = res=>{
          console.log('res.result...', res.target.result);
          let img = new Image();
          img.src = res.target.result;
          img.onload = async ()=>{
            // 创建canvas进行压缩
            let canvas = document.getElementById('canvas');
            let context = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            // 第一种压缩，压缩画布大小
            context.drawImage(img, 0,0,img.width, img.height, 0,0, img.width, img.height);

            let base64 = canvas.toDataURL();
            let res = await uploadBase64(base64);
            console.log('res...', res);

            // 第二种压缩，压缩图片质量
            let base65 = canvas.toDataURL('image/jpeg', 0.1);
            let res2 = await uploadBase64(base65);
            console.log('res2...', res2);
          }
        }
      }
    }
  },
  mounted(){
    isVip().then(res=>{
      console.log('isVip...', res);
    })
  },
  activated(){
    console.log('重新激活...');
  },
  deactivated(){
    console.log('....');
  }
}
</script>

<style lang="scss" scoped>
.popup{
  width: 100%;
}
canvas{
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
