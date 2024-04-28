<script setup>
import AppLogo from '../components/images/AppLogo.vue'
</script>

<template>
  <main class="container">
    <div class="row">
      <div class="col-md-6">
        <AppLogo />
        <p>Tutaj zamówisz jedzenie o każdej porze</p>
        <button type="button" href="#/login" class="btn btn-danger">Zaczynamy!</button>
        <h5>Autorzy:</h5>
        <p>Michał Warszawski</p>
        <p>Rafał Małucha</p>
        <p>Maksym Malichenko</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  text-align: center
}

/* img {}

/* @media only screen and (max-width: 900px) {
  main {
    padding-top: 50px;
  }

  img {
    width: auto;
    margin-top: 0px;
    margin-bottom: 50px;
  }
} */
</style>