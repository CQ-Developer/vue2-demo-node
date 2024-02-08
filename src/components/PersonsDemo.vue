<template>
    <div>
        <h1>人员列表</h1>
        <p style="color: red;">CounterDemo组件求和结果：{{ sum }}</p>
        <input type="text" v-model.trim="name">
        <button @click="createPerson">添加</button>
        <ul>
            <li v-for="person in persons" :key="person.id">{{ person.name }}</li>
        </ul>
    </div>
</template>

<script>
import { nanoid } from 'nanoid'
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'PersonDemo',
    data() {
        return {
            name: ''
        }
    },
    computed: {
        ...mapState(['persons', 'sum'])
    },
    methods: {
        createPerson() {
            this.addPerson({ id: nanoid(), name: this.name })
            this.name = ''
        },
        ...mapMutations(['addPerson'])
    },
    beforeCreate() {
        console.log(nanoid())
    }
}
</script>