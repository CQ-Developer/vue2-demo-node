<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <Transition appear name="hello">
            <h1 v-show="isShow">你好啊</h1>
        </Transition>
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