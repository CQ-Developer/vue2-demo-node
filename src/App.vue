<template>
  <div>
    <AnimationDemo></AnimationDemo>
    <TransitionDemo></TransitionDemo>
    <AnimateCssDemo></AnimateCssDemo>
  </div>
</template>

<script>
import AnimationDemo from './components/AnimationDemo.vue'
import TransitionDemo from './components/TransitionDemo.vue'
import AnimateCssDemo from './components/AnimateCssDemo.vue'
export default {
  name: 'App',
  components: {
    AnimationDemo,
    TransitionDemo,
    AnimateCssDemo
  }
}
</script>