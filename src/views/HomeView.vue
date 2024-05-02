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
          <template #title>Witaj w RAMI App!</template>
        </BigTitle>
      </div>
      <div id="categories" class="row">
        <!-- <div class="col-md-4">
          <router-link :to="{ name: 'Menu' }">
            <CategoryPanel>
              <template #title>Zupy</template>
            </CategoryPanel>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link :to="{ name: 'Menu' }">
            <CategoryPanel>
              <template #title>Dania główne</template>
            </CategoryPanel>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link :to="{ name: 'Menu' }">
            <CategoryPanel>
              <template #title>Desery</template>
            </CategoryPanel>
          </router-link>
        </div> -->
        <div class="col">
          <router-link :to="{ name: 'Menu' }">
            <CategoryPanel>
              <template #title>Zobacz kartę dań</template>
            </CategoryPanel>
          </router-link>
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
