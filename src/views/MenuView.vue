<script setup>
import ReturnArrow from '../components/ReturnArrow.vue'
import BigTitle from '../components/text/BigTitle.vue'
import MenuList from '../components/MenuList.vue'
</script>

<template>
  <main class="background-main">
    <div class="container">
      <div class="row">
        <div class="row">
          <ReturnArrow></ReturnArrow>
        </div>
        <BigTitle>
          <template #title>ZUPY</template>
        </BigTitle>
      </div>
      <div class="row">
        <MenuList />
      </div>
    </div>
  </main>
</template>

<style></style>
