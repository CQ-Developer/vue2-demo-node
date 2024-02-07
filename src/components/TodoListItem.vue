<template>
    <div>
        <label>
            <input type="checkbox" :checked="itemData.isDone" @change="checkItem">
            <span v-show="!isEditing">{{ itemData.title }}</span>
            <input type="text" :value="itemData.title" v-show="isEditing" ref="todoInput" @blur="outEditing">
        </label>
        <button @click="editItem" v-show="!isEditing">修改</button>
        <button @click="deleteItem">删除</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isEditing: false
        }
    },
    props: ['itemData', 'checkTodoItem', 'deleteTodoItem'],
    methods: {
        checkItem() {
            this.checkTodoItem(this.itemData.id)
        },
        deleteItem() {
            this.deleteTodoItem(this.itemData.id)
        },
        editItem() {
            this.isEditing = true
            // $nextTick在页面渲染完成后执行
            this.$nextTick(() => this.$refs.todoInput.focus())
        },
        outEditing() {
            this.isEditing = false
            this.$bus.$emit('todo-item-title-updated', this.itemData.id, this.$refs.todoInput.value)
        }
    }
}
</script>

<style></style>