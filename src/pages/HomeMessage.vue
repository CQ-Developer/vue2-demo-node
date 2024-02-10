<template>
    <div>
        <!-- 通过query参数传递数据 -->
        <router-link v-for="m in message" :key="m.id" :to="{ path: '/home/message/detail', query: { id: m.id, title: m.title } }">
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