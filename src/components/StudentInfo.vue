<template>
    <div>
        <p>学生姓名：<span v-convert-name="name"></span></p>
        <p>学生年龄：{{ age | twoTimes }}</p>
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