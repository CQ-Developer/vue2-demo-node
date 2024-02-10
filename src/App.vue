<template>
  <div>
    <BannerDemo></BannerDemo>
    <!--
      <router-link>标签用于设置路由
      <router-link>标签会被渲染成<a>标签
    -->
    <router-link to="/about">About</router-link>
    <router-link to="/home">Home</router-link>
    <!--
      <router-view>标签用于展示路由路由规则皮质的组件
    -->
    <router-view></router-view>
  </div>
</template>

<script>
import BannerDemo from './components/BannerDemo.vue'
export default {
  name: 'App',
  components: { BannerDemo }
}
</script>

<style>
a {
  margin-left: 5px;
}
</style>