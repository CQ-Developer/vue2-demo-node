<template>
    <div>
        <p>学生姓名：{{ age }}</p>
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