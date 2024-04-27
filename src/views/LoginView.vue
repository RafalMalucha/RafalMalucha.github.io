<script setup>
import AppLogo from '../components/images/AppLogo.vue'
import LoginForm from '../components/LoginForm.vue'
</script>

<template>
  <div>
    <div id="logo">
      <AppLogo />
    </div>
    <div>
      <LoginForm />
    </div>
  </div>
</template>

<style>
div {
  width: 100%;
  display: block;
  margin: 0 auto;
}

#logo {
  text-align: center;
  margin-bottom: 40px;
}

button{
  margin-top: 20px;
}
</style>