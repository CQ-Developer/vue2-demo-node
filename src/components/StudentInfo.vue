<template>
    <div class="student">
        <p>学生姓名：{{ name }}</p>
        <p>学生年龄：{{ age }}</p>
        <button @click="sendStudentName">发送学生名称</button>
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
    },
    methods: {
        sendStudentName() {
            this.$emit('sendStudentName', this.name)
        }
    }
}
</script>

<style scoped lang="less">
.student {
    background-color: orange;
}
</style>