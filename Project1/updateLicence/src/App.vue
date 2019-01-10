<template>
  <!-- <button @click="login">点击登陆</button> -->
  <div>
    <keep-alive exclude="Index">
      <router-view></router-view>
    </keep-alive>
    <p>{{name}}</p>
  </div>

</template>

<script>
import JSBridge from './utils/JSBridge.js';
import {login} from '@/mixin/index';
export default {
  name: 'app',
  mixins: [login],
  data(){
    return {
      name: 'NAME'
    }
  },
  provide(){
    return {
      name: 'updateLicence',
      login: (res)=>{
        this.login(res);
      }
    }
  },
  mounted(){
    this.getName();
    console.log('getName...', this.name);
  },
  methods: {
    login(num){
      console.log('num...', num);
      JSBridge.invoke('app', 'login', {
        loginCallBackName: (res)=>{
          console.log('res...', res);
        }
      });
    }
  }
}
</script>

<style lang="scss">
@import './scss/common.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
