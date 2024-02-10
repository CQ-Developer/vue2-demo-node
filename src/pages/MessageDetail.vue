<template>
    <div>
        <!-- 接受query参数 -->
        <p>消息编号: {{ id }}</p>
        <p>消息详情: {{ title }}</p>
    </div>
</template>

<script>
export default {
    name: 'MessageDetail',
    // 在路由组件中通过props属性接受参数
    props: ['id', 'title']
}
</script>