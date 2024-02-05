<template>
    <div>
        <p>学校名称：{{ name }}</p>
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