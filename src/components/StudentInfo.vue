<template>
    <div>
        <h2 class="student">{{ msg }}</h2>
        <p>姓名：{{ name }}</p>
        <p>年龄：{{ studentAge }}</p>
        <p>性别：{{ gender }}</p>
        <button @click="ageAdd">年龄+1</button>
    </div>
</template>

<script>
export default {
    name: 'StudentInfo',
    inheritAttrs: false,
    data() {
        return {
            msg: '这是一个学生信息',
            // props会先于data被初始化，所以这里可以这样引用
            studentAge: this.age
        }
    },
    /**
     * 通过数组简单传递
     * props: ['name', 'age', 'gender']
     * 
     * 通过对象添加类型校验
     * props: {
     *     name: String,
     *     age: Number,
     *     gender: String
     * }
     * 
     * 下面的是完整的校验方式
     * https://v2.vuejs.org/v2/guide/components-props.html#Prop-Validation
     */
    props: {
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            default: 19
        },
        gender: {
            type: String,
            required: true
        }
    },
    methods: {
        /**
         * https://v2.vuejs.org/v2/guide/components-props.html#One-Way-Data-Flow
         * Vue不推荐直接修改外部传入的props属性
         */
        ageAdd() {
            this.studentAge++
        }
    }
}
</script>

<style>
.student {
    background-color: gray;
}
</style>