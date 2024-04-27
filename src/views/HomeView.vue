<script setup>
import ScreenTitle from '../components/ScreenTitle.vue'
</script>

<template>
  <div>
    <ScreenTitle>
      <template #title>MENU</template>
    </ScreenTitle>
  </div>
  <div>
    <!-- <MenuList /> -->
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
