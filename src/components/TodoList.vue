<template>
    <div>
        <TodoListHeader></TodoListHeader>
        <TodiListBody></TodiListBody>
        <TodoListFooter></TodoListFooter>
    </div>
</template>

<script>
import TodoListHeader from './TodoListHeader.vue'
import TodiListBody from './TodiListBody.vue'
import TodoListFooter from './TodoListFooter.vue'
export default {
    name: 'TodoList',
    components: {
        TodoListHeader,
        TodiListBody,
        TodoListFooter
    }
}
</script>