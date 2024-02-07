<template>
    <div>
        <input type="checkbox" v-model="isAllChecked" @change="checkList">
        <span>{{ finishedItem }} / {{ totalItem }}</span>
        <button @click="cleanList">清除已完成项目</button>
    </div>
</template>

<script>
export default {
    name: 'TodoListFooter',
    data() {
        return {
            isAllChecked: false,
            totalItem: 0,
            finishedItem: 0
        }
    },
    methods: {
        countList(items) {
            this.totalItem = items.length
            this.finishedItem = items.filter(i => i.isDone).reduce(acc => acc + 1, 0)
        },
        cleanList() {
            this.$bus.$emit('todo-list-clean')
            this.isAllChecked = false
        },
        checkList() {
            this.$bus.$emit('todo-list-check-all', this.isAllChecked)
        },
        checkAll() {
            this.isAllChecked = true
        },
        uncheckAll() {
            this.isAllChecked = false
        }
    },
    mounted() {
        this.$bus.$on('todo-list-count', this.countList)
        this.$bus.$on('todo-list-all-checked', this.checkAll)
        this.$bus.$on('todo-list-all-unchecked', this.uncheckAll)
    },
    beforeDestroy() {
        this.$bus.$off('todo-list-count')
        this.$bus.$off('todo-list-all-checked')
        this.$bus.$off('todo-list-all-unchecked')
    }
}
</script>

<style></style>