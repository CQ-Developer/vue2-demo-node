<template>
  <div id="app">
    <SchoolInfo></SchoolInfo>
    <StudentInfo></StudentInfo>
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

<!--
    https://v2.vuejs.org/v2/guide/comparison.html#HTML-amp-CSS
    
    App.vue中的样式通常应用于所有组件，所以不要使用scoped修饰
-->
<style>
p {
  color: red;
}
</style>