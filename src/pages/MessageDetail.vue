<template>
    <div>
        <!-- 接受query参数 -->
        <p>消息编号: {{ $route.query.id }}</p>
        <p>消息详情: {{ $route.query.title }}</p>
    </div>
</template>

<script>
export default {
    name: 'MessageDetail'
}
</script>