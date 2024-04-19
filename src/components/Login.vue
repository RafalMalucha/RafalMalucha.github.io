<!-- Example of using Firebase auth in a Vue component -->
<script>
import { auth } from '../firebase.js';

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
