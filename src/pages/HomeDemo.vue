<template>
    <div>
        <p>我是Home组件</p>
    </div>
</template>

<script>
export default {
    name: 'HomeDemo',
    mounted() {
        console.log('Home组件挂在完毕')
        console.log('路由组件的新增属性', this.$route)
        console.log('路由组件的新增属性', this.$router)
    },
    beforeDestroy() {
        console.log('Home组件即将销毁')
    }
}
</script>