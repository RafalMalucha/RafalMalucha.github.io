<script setup>
import BigTitle from '../components/text/BigTitle.vue'
import CategoryPanel from '../components/CategoryPanel.vue'
import AppNavigation from '../components/AppNavigation.vue'
</script>

<template>
  <main>
    <div>
      <BigTitle>
        <template #title>Na co masz dzisiaj ochotę?</template>
      </BigTitle>
    </div>
    <div id="categories">
      <CategoryPanel>
        <template #title>Zupy</template>
      </CategoryPanel>
      <CategoryPanel>
        <template #title>Dania główne</template>
      </CategoryPanel>
      <CategoryPanel>
        <template #title>Desery</template>
      </CategoryPanel>
    </div>
  </main>
  <AppNavigation></AppNavigation>
</template>

<style scoped>

#categories {
  margin-top: 20px;
}
</style>
