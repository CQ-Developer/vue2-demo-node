<template>
    <div>
        <ul>
            <li v-for="n in news" :key="n.id">
                <button @click="pushShow(n)">push展示{{ n.content }}</button>
                <button @click="replaceShow(n)">replace展示{{ n.content }}</button>
                <button @click="goAbout">去About</button>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'HomeNews',
    data() {
        return {
            news: [
                { id: '01', content: 'news-01' },
                { id: '02', content: 'news-02' },
                { id: '03', content: 'news-03' },
                { id: '04', content: 'news-04' }
            ]
        }
    },
    methods: {
        pushShow(news) {
            // 通过$router的push方法前进到指定的路由组件
            this.$router.push({
                name: 'newsDetail',
                params: {
                    id: news.id,
                    content: news.content
                }
            })
        },
        // 通过$router的replace方法前进到指定的路由组件
        replaceShow(news) {
            this.$router.replace({
                name: 'newsDetail',
                params: {
                    id: news.id,
                    content: news.content
                }
            })
        },
        // 直接去指定的路径
        goAbout() {
            this.$router.push({
                path: '/about'
            })
        }
    },
    beforeDestroy() {
        console.log('HomeNews组件即将被销毁')
    }
}
</script>