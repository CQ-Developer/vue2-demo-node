<template>
    <div>
        <!-- 读取vuex中的状态 -->
        <h1>当前求和为：{{ $store.state.sum }}</h1>
        <p>结果放大十倍：{{ $store.getters.timesTen }}</p>
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
export default {
    name: 'CounterDemo',
    data() {
        return {
            n: 1
        }
    },
    methods: {
        plusN() {
            // 将需要执行的操作转发给vuex的actions
            this.$store.dispatch('plus', this.n)
        },
        minusN() {
            this.$store.dispatch('minus', this.n)
        },
        plusNWhenOdd() {
            this.$store.dispatch('plusWhenOdd', this.n)
        },
        plusNDelayed() {
            this.$store.dispatch('plusDelayed', this.n)
        }
    }
}
</script>

<style>
button {
    margin-left: 5px;
}
</style>