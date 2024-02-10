import VueRouter from 'vue-router'
import AboutDemo from '../pages/AboutDemo.vue'
import HomeDemo from '../pages/HomeDemo.vue'

export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: AboutDemo
        },
        {
            path: '/home',
            component: HomeDemo
        }
    ]
})