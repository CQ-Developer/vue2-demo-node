<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <!--
      通过向子组件传递函数，让子组件调用父组件中的函数
      以达到向父组件传递数据的目的
    -->
    <SchoolInfo :getSchoolName="getSchoolName"></SchoolInfo>
    <!--
      暴露引用
    -->
    <StudentInfo ref="student"></StudentInfo>
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
  },
  /**
   * 通过生命周期钩子和$refs为组件实例对象绑定事件
   * 这种方式更加灵活
   */
  mounted() {
    this.$refs.student.$on('sendStudentName', this.getStudentName)
  }
}
</script>

<style>
#app {
  background-color: gray;
  padding: 5px;
}
</style>