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
        <button @click="plusN">+</button>
        <button @click="minusN">-</button>
        <button @click="plusNWhenOdd">当前求和为奇数+</button>
        <button @click="plusNDelayed">延迟+</button>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    name: 'CounterDemo',
    data() {
        return {
            n: 1
        }
    },
    methods: {
        plusN() {
            this.$store.commit('plusValue', this.n)
        },
        minusN() {
            this.$store.commit('minusValue', this.n)
        },
        plusNWhenOdd() {
            this.$store.dispatch('plusWhenOdd', this.n)
        },
        plusNDelayed() {
            this.$store.dispatch('plusDelayed', this.n)
        }
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