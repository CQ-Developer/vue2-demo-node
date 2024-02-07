<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!--
            Transition是内置组件
            可以让Vue帮助我们操作动画和过渡效果

            appear
            让过渡效果一上来就触发一次

            name
            可以给Transition添加名称
        -->
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

.hello-enter-active {
    animation: 1s linear hiddenOrShow;
}

.hello-leave-active {
    animation: 1s linear reverse hiddenOrShow;
}

@keyframes hiddenOrShow {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(0%);
    }
}
</style>