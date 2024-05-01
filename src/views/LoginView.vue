<script setup>
import AppLogo from '../components/images/AppLogo.vue'
import LoginForm from '../components/LoginForm.vue'
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <AppLogo />
        </div>
        <div class="col-md-6">
          <div id="login-cart">
            <h3>Zaloguj się</h3>
            <LoginForm />
            <p>lub skorzystaj z:</p>
            <button class="btn google">GOOGLE</button>
          </div>
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
}

img {
  width: 350px;
  margin: 0 auto;
  margin-top: 100px;
}

#login-cart {
  width: 400px;
  margin: 0 auto;
}

h3 {
  margin-bottom: 40px;
}

button {
  margin-top: 20px;
}

button.google{
  background-color: #ffffff !important;
  color: #2a6fee !important;
  font-weight: bold;
}

p{
  font-weight: bold;
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