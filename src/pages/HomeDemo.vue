<template>
    <div>
        <p>我是Home组件</p>
        <!-- 通过路由组件名称访问 -->
        <router-link :to="{ name: 'guanyu' }">message</router-link>
        <router-link to="/home/news">news</router-link>
        <!--
            <keep-alive>
            使路由组件不会被销毁，可用于保持用于用于输入的缓存
            
            include
            默认缓存所有路由组件
            通过该属性指定需要被缓存的路由组件的组件名称
        -->
        <keep-alive include="HomeMessage">
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: 'HomeDemo'
}
</script>