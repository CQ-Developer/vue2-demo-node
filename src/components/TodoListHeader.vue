<template>
    <div>
        <input type="text" @keyup.enter="createTodoItem" v-model.trim="title">
    </div>
</template>

<script>
export default {
    name: 'TodoListHeader',
    data() {
        return {
            title: undefined
        }
    },
    methods: {
        createTodoItem() {
            if (this.title == undefined || this.title == '') {
                return
            }
            this.$bus.$emit('todo-item-creation', this.title)
            this.title = undefined
        }
    }
}
</script>

<style></style>