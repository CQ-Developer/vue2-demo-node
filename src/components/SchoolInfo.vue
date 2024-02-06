<template>
    <div class="school">
        <p>学校名称：{{ name }}</p>
        <p>学校地址：{{ address }}</p>
        <button @click="sendSchoolName">发送学校名称</button>
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
    },
    // 接收来自父组件的函数对象
    props: ['getSchoolName'],
    methods: {
        sendSchoolName() {
            // 调用父组件的函数并传递数据
            this.getSchoolName(this.name)
        }
    }
}
</script>

<style scoped>
.school {
    background-color: skyblue;
}
</style>