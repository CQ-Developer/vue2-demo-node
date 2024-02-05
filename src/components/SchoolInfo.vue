<template>
    <div class="sch">
        <p class="name">学校名称：{{ name }}</p>
        <p>学校地址：{{ address }}</p>
    </div>
</template>

<script>
export default {
    name: 'SchoolInfo',
    data() {
        return {
            name: '清华大学',
            address: '北京市'
        }
    }
}
</script>

<!--
    https://v2.vuejs.org/v2/guide/comparison.html#HTML-amp-CSS
    
    scoped
    使样式仅应用在当前组件中，这样不同组件的相同名称之间不会互相影响

    lang
    默认使用的就是css
-->
<style scoped>
.sch {
    background-color: skyblue;
}
.name {
    font-size: 30px;
}
</style>