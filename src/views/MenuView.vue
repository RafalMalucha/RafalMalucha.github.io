<script setup>
import ReturnArrow from '../components/ReturnArrow.vue'
import ScreenTitle from '../components/text/BigTitle.vue'
import MenuList from '../components/MenuList.vue'
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="row">
          <ReturnArrow></ReturnArrow>
        </div>
        <ScreenTitle>
          <template #title>ZUPY</template>
        </ScreenTitle>
      </div>
      <div class="row">
        <MenuList />
      </div>
    </div>
  </main>
</template>

<style></style>
