export const plugin = {
    // install方法会将Vue构造函数传递
    install(Vue, a, b, c) {
        /**
         * 接收参数
         */
        console.log(a, b, c)
        /**
         * 自定义全局过滤器
         * 将数字翻倍
         */
        Vue.filter('twoTimes', (value) => value * 2)
        /**
         * 自定义指令
         * 在名称前后添加中括号
         */
        Vue.directive('convert-name', (element, binding) => element.innerText = '[' + binding.value + ']')
        /**
         * 自定义混入
         */
        Vue.mixin({
            methods: {
                hello() {
                    alert('hello')
                }
            }
        })
    }
}