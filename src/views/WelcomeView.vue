<script setup>
import AppLogo from '../components/images/AppLogo.vue'
</script>

<template>
  <main>
    <div id="logo">
      <AppLogo />
    </div>
    <div id="start">
      <p>Tutaj zamówisz jedzenie o każdej porze</p>
      <button type="button" href="#/login" class="btn btn-danger">Zaczynamy!</button>
    </div>
    <div id="authors">
      <h5>Autorzy:</h5>
      <ul>
        <li>Michał Warszawski</li>
        <li>Rafał Małucha</li>
        <li>Maksym Malichenko</li>
      </ul>
    </div>
  </main>
</template>

<style>
main{
  text-align: center
}
#logo{
  margin-bottom: 40px;
}
#authors{
  margin-top: 40px;
}
ul{
  list-style-type: none;
}
</style>