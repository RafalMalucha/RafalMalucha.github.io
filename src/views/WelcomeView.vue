<script setup>
import AppLogo from '../components/images/AppLogo.vue'
</script>

<template>
  <main class="container">
    <div class="row">
      <div class="col-md-6">
        <AppLogo />
      </div>
      <div class="col-md-6">
        <router-link :to="{ name: 'Login' }">
          <button type="button" class="btn">Start</button>
        </router-link>
        <div id="authors">
          <h5>Autorzy:</h5>
          <p>Michał Warszawski<br>
            Rafał Małucha<br>
            Maksym Malichenko</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  background-image: url("../assets/images/rectangular-background.png") !important;
  background-repeat: no-repeat, repeat;
  background-position: top;
  margin: 0;
  padding: 40px 0px 0px 0px;
  text-align: center;
  overflow: hidden;
}

#authors {
  margin-top: 100px;
}

h5 {
  font-weight: 600;
}

@media only screen and (max-width: 900px) {
    main {
        padding-top: 50px;
    }
}
</style>