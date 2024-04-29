<!-- Example of using Firebase auth in a Vue component -->
<script>
export default {
    methods: {
        signIn() {
            auth.signInWithEmailAndPassword(email, password)
                .then(userCredential => {
                    // Handle successful sign-in
                })
                .catch(error => {
                    // Handle sign-in error
                });
        },
        signOut() {
            auth.signOut()
                .then(() => {
                    // Handle sign-out
                })
                .catch(error => {
                    // Handle sign-out error
                });
        }
    }
}
</script>

<template>
    <form>
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
</template>

<style>
form {
    text-align: center;
    width: 200px;
    margin: 0 auto;
}
</style>