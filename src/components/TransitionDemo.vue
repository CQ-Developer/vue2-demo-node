<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!--
            transition-group
            包裹多个需要动画或过渡效果的元素

            key
            被transition-group包裹的需要动画的元素必须有key属性
            这点在列表中常用
        -->
        <transition-group appear name="hello">
            <h1 v-show="isShow" key="1">你好南京</h1>
            <h1 v-show="!isShow" key="2">你好北京</h1>
        </transition-group>
    </div>
</template>

<script>
export default {
    name: 'AnimationDemo',
    data() {
        return {
            isShow: true
        }
    }
}
</script>

<style scoped>
h1 {
    background-color: orange;
}

.hello-enter,
.hello-leave-to {
    transform: translateX(-100%);
}

.hello-enter-active,
.hello-leave-active {
    transition: 1s linear;
}

.hello-leave,
.hello-enter-to {
    transform: translateX(0%);
}
</style>