<template>
    <div>
        <h1>当前求和为：{{ sum }}</h1>
        <p>结果放大十倍：{{ timesTen }}</p>
        <p>我在{{ school }}学习{{ subject }}</p>
        <p style="color: red;">PersonsDemo组件包含人数：{{ persons.length }}</p>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="plusN(n)">+</button>
        <button @click="minusN(n)">-</button>
        <button @click="plusWhenOdd(n)">当前求和为奇数+</button>
        <button @click="plusDelayed(n)">延迟+</button>
    </div>
</template>

<script>
/**
 * 使用map辅助函数访问命名空间的数据和方法非常方便
 */
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    name: 'CounterDemo',
    data() {
        return {
            n: 1
        }
    },
    methods: {
        ...mapMutations('moduleCounter', { plusN: 'plusValue', minusN: 'minusValue' }),
        ...mapActions('moduleCounter', ['plusWhenOdd', 'plusDelayed'])
    },
    computed: {
        ...mapState('moduleCounter', ['sum', 'school', 'subject']),
        ...mapState('modulePerson', ['persons']),
        ...mapGetters('moduleCounter', { timesTen: 'timesTen' })
    },
    mounted() {
        console.log(this.$store)
    }
}
</script>

<style>
button {
    margin-left: 5px;
}
</style>