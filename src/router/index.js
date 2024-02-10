import VueRouter from 'vue-router'
import AboutDemo from '../pages/AboutDemo.vue'
import HomeDemo from '../pages/HomeDemo.vue'
import HomeMessage from '../pages/HomeMessage.vue'
import HomeNews from '../pages/HomeNews.vue'
import MessageDetail from '../pages/MessageDetail.vue'

export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: AboutDemo
        },
        {
            path: '/home',
            component: HomeDemo,
            children: [
                {
                    name: 'guanyu',
                    path: 'message',
                    component: HomeMessage,
                    children: [
                        {
                            name: 'detail',
                            // 使用占位符表示路径
                            path: 'detail/:id/:title',
                            component: MessageDetail
                        }
                    ]
                },
                {
                    path: 'news',
                    component: HomeNews
                }
            ]
        }
    ]
})