<!-- Example of using Firebase auth in a Vue component -->
<!--
<script>
import { defineComponent } from 'vue';
import app from '../firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default defineComponent({
  name: 'LoginForm',
  setup() {
    const auth = getAuth(app);
    
    const signIn = async () => {
      const email = document.getElementById("inputEmail1").value;
      const password = document.getElementById("inputPassword").value;
      try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        alert("O.K");
        console.log(result);
      } catch (error) {
        console.error(error.code, error.message);
        alert("gg");
      }
    };

    return { signIn };
  }
});
</script>

<template>
    <form @submit.prevent="signIn">
        <div class="mb-3">
            <input type="email" class="form-control" id="inputEmail1" placeholder="E-mail">
        </div>
        <div class="mb-3">
            <input type="password" class="form-control" id="inputPassword" placeholder="Password">
        </div>
        <router-link :to="{ name: 'Home' }">
            <button type="submit" class="btn">Zaloguj się</button>
        </router-link>
    </form>
    <p>lub skorzystaj z:</p>
    <button class="btn google">GOOGLE</button>
</template>

<style scoped>
form {
    text-align: center;
    margin: 0 auto;
}

p {
    font-weight: bold;
    margin-top: 20px;
}

button {
    margin-top: 20px;
}

button.google {
    background-color: var(--color-white) !important;
    color: #2a6fee !important;
    font-weight: bold;
}
</style> 
-->

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router'; // Import useRouter for programmatic navigation
import app from '../firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default defineComponent({
  name: 'LoginForm',
  setup() {
    const router = useRouter(); // Use useRouter to access the router instance
    const auth = getAuth(app);

    const signIn = async (event) => {
      event.preventDefault(); // Explicitly prevent the default form behavior
      const email = document.getElementById("inputEmail1").value;
      const password = document.getElementById("inputPassword").value;
      try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        console.log(result);
        router.push({ name: 'Home' }); // Navigate programmatically to 'Home'
      } catch (error) {
        console.error(error.code, error.message);
        alert("Błędne dane do logowania!");
      }
    };

    return { signIn };
  }
});
</script>

<template>
    <form @submit="signIn">
        <div class="mb-3">
            <input type="email" class="form-control" id="inputEmail1" placeholder="E-mail">
        </div>
        <div class="mb-3">
            <input type="password" class="form-control" id="inputPassword" placeholder="Password">
        </div>
        <button type="submit" class="btn">Zaloguj się</button> <!-- Removed router-link -->
    </form>
    <p>lub skorzystaj z:</p>
    <button class="btn google">GOOGLE</button>
</template>


