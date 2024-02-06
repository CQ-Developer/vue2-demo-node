<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <SchoolInfo></SchoolInfo>
    <StudentInfo></StudentInfo>
  </div>
</template>

<script>
import SchoolInfo from './components/SchoolInfo.vue'
import StudentInfo from './components/StudentInfo.vue'
export default {
  name: 'App',
  data() {
    return {
      msg: '你好啊！'
    }
  },
  components: {
    SchoolInfo,
    StudentInfo
  }
}
</script>

<style>
#app {
  background-color: gray;
  padding: 5px;
}
</style>