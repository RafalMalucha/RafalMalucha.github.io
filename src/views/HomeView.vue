<script setup>
import BigTitle from '../components/text/BigTitle.vue'
import CategoryPanel from '../components/CategoryPanel.vue'
import NavigationBar from '../components/NavigationBar.vue'
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <BigTitle>
          <template #title>Na co masz dzisiaj ochotę?</template>
        </BigTitle>
      </div>
      <div id="categories" class="row">
        <div class="col-md-4">
          <CategoryPanel>
            <template #title>Zupy</template>
          </CategoryPanel>
        </div>
        <div class="col-md-4">
          <CategoryPanel>
            <template #title>Dania główne</template>
          </CategoryPanel>
        </div>
        <div class="col-md-4">
          <CategoryPanel>
            <template #title>Desery</template>
          </CategoryPanel>
        </div>
      </div>
    </div>
  </main>
  <nav>
    <NavigationBar></NavigationBar>
  </nav>
</template>

<style scoped>
#categories {
  margin-top: 20px;
}
</style>
