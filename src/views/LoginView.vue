<script setup>
import AppLogo from '../components/images/AppLogo.vue'
import LoginForm from '../components/LoginForm.vue'
</script>

<template>
  <main class="container">
    <div class="row">
      <div class="col-md-6">
        <AppLogo />
      </div>
      <div class="col-md-6">
        <div id="login-cart">
          <h3>Zaloguj się</h3>
          <LoginForm />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  padding-top: 150px;
}

img {
  text-align: center;
  width: 350px;
  margin: 0 auto;
  margin-top: 100px;
}

#login-cart {
  width: 400px;
  margin: 0 auto;
  padding: 80px 0px;
  border: 1px solid #000;
}

h3 {
  margin-bottom: 40px;
  text-align: center;
}

button {
  margin-top: 20px;
}

@media only screen and (max-width: 900px) {
  main {
    padding-top: 50px;
  }

  img {
    width: auto;
    margin-top: 0px;
    margin-bottom: 50px;
  }

  #login-cart {
    width: 85%;
  }
}
</style>