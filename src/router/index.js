import VueRouter from 'vue-router'
import AboutDemo from '../pages/AboutDemo.vue'
import HomeDemo from '../pages/HomeDemo.vue'
import HomeMessage from '../pages/HomeMessage.vue'
import HomeNews from '../pages/HomeNews.vue'
import MessageDetail from '../pages/MessageDetail.vue'
import NewsDetails from '../pages/NewsDetails.vue'

const router = new VueRouter({
    routes: [
        {
            path: '/about',
            component: AboutDemo,
            // 为路由设置元信息
            meta: {
                isAuth: true,
                title: '关于'
            }
        },
        {
            path: '/home',
            component: HomeDemo,
            meta: {
                title: '个人中心'
            },
            children: [
                {
                    name: 'guanyu',
                    path: 'message',
                    component: HomeMessage,
                    meta: {
                        title: '消息'
                    },
                    children: [
                        {
                            name: 'detail',
                            path: 'detail/:id/:title',
                            component: MessageDetail,
                            props({ params }) {
                                return params
                            },
                            meta: {
                                title: '消息详情'
                            }
                        }
                    ]
                },
                {
                    path: 'news',
                    component: HomeNews,
                    meta: {
                        title: '新闻'
                    },
                    children: [
                        {
                            name: 'newsDetail',
                            path: '/detail/:id/:content',
                            component: NewsDetails,
                            props({ params }) {
                                return params
                            },
                            meta: {
                                title: '新闻详情'
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

// 使用全局前置路由守卫进行权限验证
router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) {
        if (localStorage.getItem('school') == 'a') {
            next()
        } else {
            alert('您没有权限')
        }
    } else {
        next()
    }
})

// 全局后置路由守卫，一般用来修改网站的title
router.afterEach((to) => {
    document.title = to.meta.title
})

export default router