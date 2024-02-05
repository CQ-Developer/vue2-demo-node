<template>
  <div id="app">
    <SchoolInfo></SchoolInfo>

    <!-- 数字需要使用v-bind通过表达式传递 -->
    <StudentInfo name="张三" :age="17" gender="女"></StudentInfo>

    <!-- 年龄是非必传会使用默认值 -->
    <StudentInfo name="李四" gender="男"></StudentInfo>

    <!--
      传递一个不存在的props会被添加到组件根元素的$attrs数组中
      https://v2.vuejs.org/v2/guide/components-props.html#Non-Prop-Attributes
    -->
    <StudentInfo name="李四" gender="男" edu="大学"></StudentInfo>
  </div>
</template>

<script>
import SchoolInfo from './components/SchoolInfo.vue'
import StudentInfo from './components/StudentInfo.vue'
export default {
  name: 'App',
  components: {
    SchoolInfo,
    StudentInfo
  }
}
</script>