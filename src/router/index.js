import VueRouter from 'vue-router'
import AboutDemo from '../pages/AboutDemo.vue'
import HomeDemo from '../pages/HomeDemo.vue'
import HomeMessage from '../pages/HomeMessage.vue'
import HomeNews from '../pages/HomeNews.vue'
import MessageDetail from '../pages/MessageDetail.vue'
import NewsDetails from '../pages/NewsDetails.vue'

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
                            path: 'detail/:id/:title',
                            component: MessageDetail,
                            props({ params }) {
                                return params
                            }
                        }
                    ]
                },
                {
                    path: 'news',
                    component: HomeNews,
                    children: [
                        {
                            name: 'newsDetail',
                            path: '/detail/:id/:content',
                            component: NewsDetails,
                            props({ params }) {
                                return params
                            }
                        }
                    ]
                }
            ]
        }
    ]
})