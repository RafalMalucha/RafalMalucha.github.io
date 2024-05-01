<script setup>
import AppLogo from '../components/images/AppLogo.vue'
</script>

<template>
  <main class="background-main-2">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <AppLogo />
          <router-link :to="{ name: 'Login' }">
            <button type="button" class="btn">Start</button>
          </router-link>
        </div>
        <div class="col-md-4">
          <div id="authors">
            <h5>Autorzy:</h5>
            <p>Michał Warszawski<br>
              Rafał Małucha<br>
              Maksym Malichenko</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
#authors {
  margin-top: 100px;
}

h5 {
  font-weight: 600;
}

main {
  padding-top: 150px;
}

.row>div:nth-of-type(1) {
  text-align: center;
}


@media only screen and (max-width: 900px) {
  main {
    padding-top: 50px;
  }

  .row>div:nth-of-type(2) {
    text-align: center;
  }

}
</style>