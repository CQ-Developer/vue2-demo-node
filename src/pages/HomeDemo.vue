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
    },
    beforeDestroy() {
        console.log('Home组件即将销毁')
    }
}
</script>