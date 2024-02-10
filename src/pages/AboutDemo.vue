<template>
    <div>
        <p>我是About组件</p>
    </div>
</template>

<script>
export default {
    name: 'AboutDemo',
    /**
     * 每次vue-router路由到某个组件时
     * 会将这个组件挂载
     */
    mounted() {
        console.log('About组件挂在完毕')
    },
    /**
     * 每次vue-router切换路由到其他组件
     * 会将当前组件销毁
     */
    beforeDestroy() {
        console.log('About组件即将销毁')
    }
}
</script>