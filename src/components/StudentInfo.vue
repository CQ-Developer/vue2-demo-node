<template>
    <div class="student">
        <p>学生姓名：{{ name }}</p>
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

<style scoped lang="less">
.student {
    background-color: orange;
}
</style>