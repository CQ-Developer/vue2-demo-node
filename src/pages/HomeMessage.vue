<template>
    <div>
        <!-- 通过params参数传递数据 -->
        <router-link v-for="m in message" :key="m.id" :to="{ name: 'detail', params: { id: m.id, title: m.title } }">
            {{ m.title }}
        </router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'HomeMessage',
    data() {
        return {
            message: [
                { id: '01', title: 'message-01' },
                { id: '02', title: 'message-02' },
                { id: '03', title: 'message-03' }
            ]
        }
    }
}
</script>