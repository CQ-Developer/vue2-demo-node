<template>
    <div>
        <p>我是Home组件</p>
        <!-- 使用嵌套路由需要写完成的路径名 -->
        <router-link to="/home/message">message</router-link>
        <router-link to="/home/news">news</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'HomeDemo'
}
</script>