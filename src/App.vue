<template>
  <div class="app">
    <!--
      通过在标签上添加slot属性
      指定向哪个插槽插入结构
    -->
    <CategoryCard title="游戏">
      <ul slot="a">
        <li v-for="(game, index) in games" :key="index">{{ game }}</li>
      </ul>
      <img slot="b" src="./assets/logo.png">
    </CategoryCard>

    <!--
      使用<template v-slot:a>这种方式
      指定向哪个插槽插入结构
      这种方式的好处是<template>标签不会参与页面的渲染
      适合包含了复杂结构的插槽
    -->
    <CategoryCard title="游戏">
      <template v-slot:a>
        <ol>
          <li v-for="(game, index) in games" :key="index">{{ game }}</li>
        </ol>
      </template>
      <template v-slot:b>
        <img slot="b" src="./assets/logo.png">
      </template>
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

img {
  width: 100%;
}
</style>
