/**
 * 混合：提取公共的方法和属性等等
 * https://v2.vuejs.org/v2/guide/mixins
 */
export const m1 = {
    /**
     * 混合data
     * 如果原组件中存在该属性，则使用组件自带的，否则使用混合的
     */
    data() {
        return {
            x: 1
        }
    },
    /**
     * 混合methods
     * 如果原组件中存在该方法，则使用组件自带的，否则使用混合的
     */
    methods: {
        alertName() {
            alert(this.name)
        }
    },
    /**
     * 混合生命周期钩子
     * 组件会优先调用混合的生命周期钩子，再调用自己的生命周期钩子
     */
    mounted() {
        console.log('from m1...')
    }
}

/**
 * 测试全局混合
 */
export const m2 = {
    data() {
        return {
            y: 1
        }
    }
}