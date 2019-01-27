<template>
  <div class="counter-warp">
    <!-- 头部 -->
    <div class="header">
      <i-icon type="search" size="28" color="#000" />
      <div class="tabs">
        <i-tabs :current="current" scroll @change="tabChange" color="#f85151">
          <i-tab i-class="tab" v-for="(item, index) in channels" :key="index" :data-url="item.url" :title="item.name"></i-tab>
        </i-tabs>
      </div>
      <i-icon type="add" size="28" color="#000" />
      <i-icon type="group" size="28" color="#000" />
    </div>
    <!-- 新闻列表 -->
    <!-- <list list="[1,2,3]"></list> -->
    <card text="card component"></card>
    <list :list="newsList"></list>
  </div>
</template>

<!--必须指定为ts-->
<script lang="ts" src="./index.ts"></script>

<style lang="less" scoped>
  .header{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .tabs{
      flex: 1;
      overflow: scroll;
      flex-wrap: nowrap;
      flex-shrink: 0;
    }
  }
  .tab{
    font-size: 24rpx;
  }
</style>
