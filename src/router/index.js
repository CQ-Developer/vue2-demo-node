import VueRouter from 'vue-router'
import AboutDemo from '../pages/AboutDemo.vue'
import HomeDemo from '../pages/HomeDemo.vue'
import HomeMessage from '../pages/HomeMessage.vue'
import HomeNews from '../pages/HomeNews.vue'

export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: AboutDemo
        },
        {
            path: '/home',
            component: HomeDemo,
            // 配置嵌套路由
            children: [
                {
                    // 注意不要写成/messages
                    path: 'message',
                    component: HomeMessage
                },
                {
                    path: 'news',
                    component: HomeNews
                }
            ]
        }
    ]
})