<!-- Example of using Firebase auth in a Vue component -->
<script>
// export default {
//     methods: {
//         signIn() {
//             auth.signInWithEmailAndPassword(email, password)
//                 .then(userCredential => {
//                     // Handle successful sign-in
//                 })
//                 .catch(error => {
//                     // Handle sign-in error
//                 });
//         },
//         signOut() {
//             auth.signOut()
//                 .then(() => {
//                     // Handle sign-out
//                 })
//                 .catch(error => {
//                     // Handle sign-out error
//                 });
//         }
//     }
// }
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
    <p>lub skorzystaj z:</p>
    <button class="btn google">GOOGLE</button>
</template>

<style>
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
    background-color: #ffffff !important;
    color: #2a6fee !important;
    font-weight: bold;
}
</style>
