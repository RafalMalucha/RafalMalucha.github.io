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
                <label for="inputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="inputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="inputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="inputPassword">
            </div>
            <button type="submit" class="btn btn-primary">ZALOGUJ</button>
        </form>
</template>

<style>
    form{
        text-align: center;
        width: 200px;
        margin: 0 auto;
    }
</style>