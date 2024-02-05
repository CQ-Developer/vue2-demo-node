<template>
    <div class="stu">
        <p class="name">学生姓名：{{ name }}</p>
        <p>学生年龄：{{ age }}</p>
    </div>
</template>

<script>
export default {
    name: 'StudentInfo',
    data() {
        return {
            name: '张三',
            age: 18,
        }
    }
}
</script>

<!--
    https://v2.vuejs.org/v2/guide/comparison.html#HTML-amp-CSS
    
    scoped
    使样式仅应用在当前组件中，这样不同组件的相同名称之间不会互相影响

    lang
    可以指定使用的语法，比如这里使用less，需要安装less
    npm install less-loader -D
-->
<style scoped lang="less">
.stu {
    background-color: orange;
    .name {
        font-size: 40px;
    }
}
</style>