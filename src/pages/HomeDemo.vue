<template>
    <div>
        <p>我是Home组件</p>
        <!-- 通过路由组件名称访问 -->
        <router-link :to="{ name: 'guanyu' }">message</router-link>
        <router-link to="/home/news">news</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'HomeDemo'
}
</script>