<template>
  <div>
    <BannerDemo></BannerDemo>
    <!--
      replace
      完整写法为 :replace="true"
      开启replace模式后不会留下浏览器记录
      也就是说新的路径会直接替换掉原来栈顶的元素，而不是压栈
      默认使用的是压栈
    -->
    <router-link replace to="/about">About</router-link>
    <router-link replace to="/home">Home</router-link>
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