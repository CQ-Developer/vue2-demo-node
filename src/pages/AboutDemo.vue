<template>
    <div>
        <p>我是About组件</p>
    </div>
</template>

<script>
export default {
    name: 'AboutDemo',
    /**
     * 组件内守卫
     * 通过路由规则进入组件时执行
     */
    beforeRouteEnter(to, from, next) {
        console.log('beforeRouteEnter开始执行...', to, from)
        next()
    },
    /**
     * 组件内守卫
     * 通过路由规则离开组件时执行
     */
    beforeRouteLeave(to, from, next) {
        console.log('beforeRouteLeave开始执行...', to, from)
        next()
    }
}
</script>