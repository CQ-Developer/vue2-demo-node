<template>
    <div>
        <p @click="alertName">学生姓名：{{ name }}</p>
        <p>学生年龄：{{ age }}</p>
    </div>
</template>

<script>
import { m1 } from '../mixin.js'
export default {
    name: 'StudentInfo',
    data() {
        return {
            name: '张三',
            age: 18,
            x: 3
        }
    },
    mixins: [m1],
    mounted() {
        console.log('from student...')
    }
}
</script>