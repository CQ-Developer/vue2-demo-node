<template>
  <div class="app">
    <!--
      通过插槽可以将一段HTML结构传递给子组件
    -->
    <CategoryCard title="游戏">
      <ul>
        <li v-for="(game, index) in games" :key="index">{{ game }}</li>
      </ul>
    </CategoryCard>
    <CategoryCard title="游戏">
      <ol>
        <li v-for="(game, index) in games" :key="index">{{ game }}</li>
      </ol>
    </CategoryCard>
    <CategoryCard title="游戏">
      <h4 v-for="(game, index) in games" :key="index">{{ game }}</h4>
    </CategoryCard>
  </div>
</template>

<script>
import CategoryCard from './components/CategoryCard.vue'
export default {
  name: 'App',
  data() {
    return {
      games: ['魔兽世界', 'DOATA2', '王者荣耀']
    }
  },
  components: {
    CategoryCard
  }
}
</script>

<style scoped>
.app {
  display: flex;
  justify-content: space-evenly;
}
</style>
