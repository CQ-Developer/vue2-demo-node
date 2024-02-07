<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!--
            使用第三方动画库 animate.css
            npm install animate.css --save
        -->
        <transition
            appear
            name="animate__animated animate__bounce"
            enter-active-class="animate__rotateInDownLeft"
            leave-active-class="animate__rotateOutDownLeft">
            <h1 v-show="isShow">你好啊</h1>
        </transition>
    </div>
</template>

<script>
import 'animate.css'
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
</style>