<template>
    <div>
        <TodoListItem v-for="item in items" :key="item.id" :itemData="item" :checkTodoItem="checkTodoItem"
            :deleteTodoItem="deleteTodoItem">
        </TodoListItem>
    </div>
</template>

<script>
import { nanoid } from 'nanoid'
import TodoListItem from './TodoListItem.vue'
export default {
    name: 'TodoListBody',
    components: {
        TodoListItem
    },
    data() {
        return {
            items: []
        }
    },
    methods: {
        createTodoItem(title) {
            this.items.unshift({ id: nanoid(), title: title, isDone: false })
        },
        checkTodoItem(id) {
            const i = this.items.findIndex(e => e.id == id)
            const item = this.items.at(i)
            item.isDone = !item.isDone
            this.items.splice(i, 1, item)
        },
        checkTodoItems(value) {
            this.items = this.items.map(e => {
                e.isDone = value
                return e
            })
        },
        updateTodoItem(id, title) {
            const i = this.items.findIndex(e => e.id == id)
            const item = this.items.at(i)
            item.title = title
            this.items.splice(i, 1, item)
        },
        deleteTodoItem(id) {
            const i = this.items.findIndex(e => e.id == id)
            this.items.splice(i, 1)
        },
        cleanTodoItem() {
            this.items = this.items.filter(e => !e.isDone)
        }
    },
    watch: {
        items: {
            deep: true,
            handler(value) {
                this.$bus.$emit('todo-list-count', value)
                if (this.items.length != 0) {
                    const checkedCount = this.items.filter(e => e.isDone).reduce(a => a + 1, 0)
                    if (checkedCount == this.items.length) {
                        this.$bus.$emit('todo-list-all-checked')
                    } else {
                        this.$bus.$emit('todo-list-all-unchecked')
                    }
                }
                if (this.items.length == 0) {
                    this.$bus.$emit('todo-list-all-unchecked')
                }
            }
        }
    },
    mounted() {
        this.$bus.$on('todo-item-creation', this.createTodoItem)
        this.$bus.$on('todo-item-title-updated', this.updateTodoItem)
        this.$bus.$on('todo-list-clean', this.cleanTodoItem)
        this.$bus.$on('todo-list-check-all', this.checkTodoItems)
    },
    beforeDestroy() {
        this.$bus.$off('todo-item-creation')
        this.$bus.$off('todo-item-title-updated')
        this.$bus.$off('todo-list-clean')
        this.$bus.$off('todo-list-check-all')
    }
}
</script>

<style></style>