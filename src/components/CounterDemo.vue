<template>
    <div>
        <h1>当前求和为：{{ sum }}</h1>
        <p>结果放大十倍：{{ timesTen }}</p>
        <p>我在{{ school }}学习{{ subject }}</p>
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
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    name: 'CounterDemo',
    data() {
        return {
            n: 1
        }
    },
    methods: {
        ...mapMutations({ plusN: 'plusValue', minusN: 'minusValue' }),
        ...mapActions(['plusWhenOdd', 'plusDelayed'])
    },
    computed: {
        ...mapState(['sum', 'school', 'subject']),
        ...mapGetters({ timesTen: 'timesTen' })
    }
}
</script>

<style>
button {
    margin-left: 5px;
}
</style>