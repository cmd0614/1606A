<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
import Bg from '@/assets/bg.jpg';
export default {
  computed: {
    canvas(){
      return this.$refs.canvas;
    },
    context(){
      return this.$refs.canvas.getContext('2d');
    }
  },
  mounted(){
    let img = new Image();
    img.src = Bg;
    img.onload = ()=>{
      this.canvas.width = img.width;
      this.canvas.height = img.height;
      this.context.drawImage(img, 0,0,img.width, img.height, 0,0,img.width, img.height);
    }
  }
}
</script>
<style lang="scss">
  canvas{
    width: 100%;
  }
</style>
