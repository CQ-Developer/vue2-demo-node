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
                            path: 'detail/:id/:title',
                            component: MessageDetail,
                            /**
                             * props: {...}
                             * 通过对象传递数据，这样只能写死
                             * 
                             * props: true
                             * 通过布尔值传递params数据，这种方式只能传递params数据，不能传递query数据
                             * 
                             * props: function() {...}
                             * 通过函数返回对象，函数的参数是$route对象
                             * 可以传递params或者query，可以使用结构复制让代码更加精简
                             */
                            props({ params }) {
                                return params
                            }
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