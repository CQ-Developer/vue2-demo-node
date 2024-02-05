<template>
    <div>
        <p @click="alertName">学校名称：{{ name }}</p>
        <p>学校地址：{{ address }}</p>
    </div>
</template>

<script>
import { m1 } from '../mixin.js'
export default {
    name: 'SchoolInfo',
    data() {
        return {
            name: '清华大学',
            address: '北京市'
        }
    },
    mixins: [m1],
    mounted() {
        console.log('from school...')
    }
}
</script>