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
                    path: 'message',
                    component: HomeMessage,
                    children: [
                        {
                            path: 'detail',
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