<template>
    <div>
        <h2>{{ title }}分组</h2>
        <!-- 默认插槽 -->
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'CategoryCard',
    props: {
        title: String
    }
}
</script>

<style scoped>
div {
    width: 300px;
    height: 400px;
    background-color: blue;
    text-align: center;
    padding-top: 30px;
}
h2 {
    background-color: red;
}
</style>