<template>
    <div class="student">
        <p>学生姓名：{{ name }}</p>
        <p>学生年龄：{{ age }}</p>
        <button @click="sendStudentName">发送学生名称</button>
        <button @click="cancelEvent">取消事件</button>
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
        },
        cancelEvent() {
            /**
             * this.$off('event')
             * 取消指定名称的事件
             * 
             * this.$off(['e1', 'e2', 'e3'])
             * 同时取消多个事件
             * 
             * this.$off()
             * 取消所有事件
             * 
             * 注意
             * 如果调用this.$destroy()也会取消所有自定义事件
             * 但不会取消DOM原生事件
             */
            this.$off('sendStudentName')
        }
    }
}
</script>

<style scoped lang="less">
.student {
    background-color: orange;
}
</style>