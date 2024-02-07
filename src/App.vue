<template>
  <div>
  </div>
</template>

<script>
// npm install axios
import axios from 'axios'
export default {
  name: 'App',
  methods: {
    testAxios() {
      axios.get('http://localhost:8080/api/studfent')
           .then(resp => console.log(resp))
           .catch(err => console.error('错误', err))
    }
  }
}
</script>