<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <!--
      通过向子组件传递函数，让子组件调用父组件中的函数
      以达到向父组件传递数据的目的
    -->
    <SchoolInfo :getSchoolName="getSchoolName"></SchoolInfo>
    <!--
      给VueComponent组件实例绑定事件
      当事件被触发后会调用指定的方法
      通过这种方式也能达到向父组件传递数据的目的
    -->
    <StudentInfo @sendStudentName="getStudentName"></StudentInfo>
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
  methods: {
    getSchoolName(name) {
      console.log(name)
    },
    getStudentName(name) {
      console.log(name)
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