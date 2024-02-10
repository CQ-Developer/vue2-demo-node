<template>
    <div>
        <h1>Vue Router Demo</h1>
        <button @click="forward">前进</button>
        <button @click="back">后退</button>
        <button @click="go">测试go方法</button>
    </div>
</template>

<script>
export default {
    name: 'BannerDemo',
    methods: {
        /**
         * $router的原型对象方法
         * 可以理解为浏览器的前进按钮
         */
        forward() {
            this.$router.forward()
        },
        back() {
            /**
             * $router的原型对象方法
             * 可以理解为浏览器的后退按钮
             */
            this.$router.back()
        },
        go() {
            /**
             * $router的原想对象方法
             * 传递整数n则前进n步
             * 传递整数-n则后退n步
             */
            this.$router.go(2)
        }
    }
}
</script>