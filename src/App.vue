<template>
  <div>
    <AnimationDemo></AnimationDemo>
    <TransitionDemo></TransitionDemo>
  </div>
</template>

<script>
import AnimationDemo from './components/AnimationDemo.vue'
import TransitionDemo from './components/TransitionDemo.vue'
export default {
  name: 'App',
  components: {
    AnimationDemo,
    TransitionDemo
  }
}
</script>