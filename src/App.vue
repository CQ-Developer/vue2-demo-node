<template>
  <div class="app">
    <!--
      通过v-slot:name="abc"
      获取指定name插槽的数据
      这里没有给插槽命名，所以使用默认名default，也可以不写
    -->
    <CategoryCard title="游戏">
      <template v-slot:default="slotProps">
        <p>{{ slotProps.game.name }}</p>
        <p>{{ slotProps.game.state }}</p>
      </template>
    </CategoryCard>
    <!--
      解构赋值
      插槽数据支持解构赋值
    -->
    <CategoryCard title="游戏">
      <template v-slot:default="{ game }">
        <p>{{ game.name }}</p>
        <p>{{ game.state }}</p>
      </template>
    </CategoryCard>
    <!--
      简化
      直接将v-slot写在组件标签上并省略插槽名称
    -->
    <CategoryCard title="游戏" v-slot="{ game }">
        <p>{{ game.name }}</p>
        <p>{{ game.state }}</p>
    </CategoryCard>
  </div>
</template>

<script>
import CategoryCard from './components/CategoryCard.vue'
export default {
  name: 'App',
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
