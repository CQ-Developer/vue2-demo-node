<template>
    <div>
        <!-- 通过params参数传递数据 -->
        <ul>
            <li v-for="m in message" :key="m.id">
                <router-link :to="{ name: 'detail', params: { id: m.id, title: m.title } }">{{ m.title }}</router-link>
                <!-- 通过路由缓存保持用户的输入 -->
                <input type="text">
            </li>
        </ul>
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
    },
    beforeDestroy() {
        console.log('HomeMessage组件即将被销毁了')
    },
    /**
     * 新的生命周期钩子
     * 在路由组件被激活时调用
     * 适合用于设置定时任务之类
     */
    activated() {
        this.timer = setInterval(() => console.log('HomeMessage组件被激活了'), 300);
    },
    /**
     * 新的生命周期钩子
     * 在路由组件不被激活的情况下调用
     * 适合用于取消定时任务之类
     */
    deactivated() {
        clearInterval(this.timer)
    }
}
</script>