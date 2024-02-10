<template>
    <div>
        <p>新闻编号: {{ id }}</p>
        <p>新闻编号: {{ content }}</p>
    </div>
</template>

<script>
export default {
    name: 'NewsDetail',
    props: ['id', 'content']
}
</script>