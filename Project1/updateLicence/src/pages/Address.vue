<template>
  <button @click="share">微信分享</button>
</template>
<script>
import {goShare} from '@/api/index';
export default {
  methods: {
    share(){
        // 微信好友分享
        // window['CHELUN_SHARE_DATA_WXMESSAGE'] = {
        //   title: '五年工作，一年模拟',
        //   desc: '微信分享官方文档',
        //   link: 'https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419317332&token=&lang=zh_CN',
        //   imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546926302863&di=d6233303e99f48fad4e64eefe62515a4&imgtype=0&src=http%3A%2F%2Fimg4.cache.netease.com%2Flady%2F2015%2F11%2F20%2F201511201659457eb79.png'
        // }
        // 微信好友小程序的分享
         window['CHELUN_SHARE_DATA_WXMESSAGE'] = {
          type: 'miniProgram',
          appid: 'gh_2da4a462a0c3',
          path: 'pages/index/index',
          imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546926302863&di=d6233303e99f48fad4e64eefe62515a4&imgtype=0&src=http%3A%2F%2Fimg4.cache.netease.com%2Flady%2F2015%2F11%2F20%2F201511201659457eb79.png'
        }

        // 微信朋友圈分享
        window['CHELUN_SHARE_DATA_WXTIMELINE'] = {
          type: 'photo',
          imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546919478716&di=b8a7d34022e91d86cd0d31fc9d6ec346&imgtype=0&src=http%3A%2F%2Fimg0.pclady.com.cn%2Fpclady%2F1606%2F30%2F1536947_14.jpg'
        }
        goShare();
    }
  }
}
</script>
