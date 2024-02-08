<template>
    <div>
        <h2>{{ title }}分组</h2>
        <!-- 具名插槽 -->
        <slot name="a"></slot>
        <slot name="b"></slot>
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
    background-color: blue;
    text-align: center;
    padding-top: 30px;
}
h2 {
    background-color: red;
}
</style>