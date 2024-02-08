<template>
    <div>
        <h1>当前求和为：{{ sum }}</h1>
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
            sum: 0,
            n: 1
        }
    },
    methods: {
        plusN() {
            this.sum += this.n
        },
        minusN() {
            this.sum -= this.n
        },
        plusNWhenOdd() {
            if (this.sum % 2) {
                this.sum += this.n
            }
        },
        plusNDelayed() {
            setTimeout(() => this.sum += this.n, 1000)
        }
    }
}
</script>

<style>
button {
    margin-left: 5px;
}
</style>