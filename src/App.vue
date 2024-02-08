<template>
  <div>
    <CounterDemo></CounterDemo>
    <hr>
    <PersonsDemo></PersonsDemo>
  </div>
</template>

<script>
import CounterDemo from './components/CounterDemo.vue'
import PersonsDemo from './components/PersonsDemo.vue'
export default {
  name: 'App',
  components: { CounterDemo, PersonsDemo }
}
</script>