<template>
    <div>
        <h1>人员列表</h1>
        <p style="color: red;">CounterDemo组件求和结果：{{ sum }}</p>
        <p>第一个人的名字：{{ firstPersonName }}</p>
        <input type="text" v-model.trim="name">
        <button @click="createPerson">添加</button>
        <button @click="addNamedWang">添加姓王的人</button>
        <ul>
            <li v-for="person in persons" :key="person.id">{{ person.name }}</li>
        </ul>
    </div>
</template>

<script>
import { nanoid } from 'nanoid'

/**
 * 不使用map辅助函数
 * 比较麻烦，推荐使用map辅助函数
 */
export default {
    name: 'PersonDemo',
    data() {
        return {
            name: ''
        }
    },
    computed: {
        persons() {
            return this.$store.state.modulePerson.persons
        },
        sum() {
            return this.$store.state.moduleCounter.sum
        },
        firstPersonName() {
            return this.$store.getters['modulePerson/firstPersonName']
        }
    },
    methods: {
        createPerson() {
            this.$store.commit('modulePerson/addPerson', { id: nanoid(), name: this.name })
            this.name = ''
        },
        addNamedWang() {
            this.$store.dispatch('modulePerson/addNamedWang', { id: nanoid(), name: this.name })
            this.name = ''
        }
    }
}
</script>