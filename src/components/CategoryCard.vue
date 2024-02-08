<template>
    <div>
        <h2>{{ title }}分组</h2>
        <!--
            作用域插槽
            通过v-bind将数据传递给使用插槽的父组件
        -->
        <slot :game="game"></slot>
    </div>
</template>

<script>
export default {
    name: 'CategoryCard',
    props: {
        title: String
    },
    /**
     * 注意：数据在子组件中
     */
    data() {
        return {
            game: {
                name: '魔兽世界',
                state: 'US'
            }
        }
    }
}
</script>

<style scoped>
div {
    width: 300px;
    background-color: blue;
    text-align: center;
    padding-top: 30px;
}
h2 {
    background-color: red;
}
</style>