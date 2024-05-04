
    <template>
        <div class="card shadow">
          <img src="../assets/images/profile-photo.png" class="card-img-top" alt="Profile image">
          <div class="card-body">
            <div class="card-title">
              <h5 v-if="!isEditing">{{ userName }}</h5>
              <input v-if="isEditing" v-model="editableUserName" class="form-control">
            </div>
            <p class="card-text" v-if="!isEditing">{{ userInfo }}</p>
            <textarea v-if="isEditing" v-model="editableUserInfo" class="form-control"></textarea>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">{{ userEmail }}</li>
              <li class="list-group-item" v-if="!isEditing">{{ phoneNumber }}</li>
              <input v-if="isEditing" v-model="editablePhoneNumber" class="form-control" type="tel">
             <!--  <li class="list-group-item">Adres do dostawy</li> -->
            </ul>
            <button @click="toggleEdit" class="btn btn-secondary">{{ isEditing ? 'Save' : 'Edit' }}</button>
          </div>
        </div>
      </template>
      
      <script>
      import { getAuth, onAuthStateChanged } from "firebase/auth";
      import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
      
      export default {
        name: 'ProfileCard',
        data() {
          return {
            userEmail: 'Loading email...',
            userName: 'Imię i nazwisko',
            userInfo: 'Opis profilu',
            phoneNumber: 'Numer telefonu',
            editableUserName: '',
            editableUserInfo: '',
            editablePhoneNumber: '',
            isEditing: false
          };
        },
        methods: {
          toggleEdit() {
            this.isEditing = !this.isEditing;
            if (!this.isEditing) {
              // Save changes to Firestore
              this.userName = this.editableUserName;
              this.userInfo = this.editableUserInfo;
              this.phoneNumber = this.editablePhoneNumber;
              this.saveOrUpdateUser();
            } else {
              // Load current values into editable fields
              this.editableUserName = this.userName;
              this.editableUserInfo = this.userInfo;
              this.editablePhoneNumber = this.phoneNumber;
            }
          },
          async saveOrUpdateUser() {
            const db = getFirestore();
            const auth = getAuth();
            const user = auth.currentUser;
      
            if (user) {
              const userRef = doc(db, "users", user.uid);
              // Update Firestore with new data, including the user's email
              await setDoc(userRef, {
                email: this.userEmail,  // Assuming the email won't change or only updated through auth mechanisms
                userName: this.userName,
                user_info: this.userInfo,
                phone_number: this.phoneNumber
              }, { merge: true });
            }
          },
          async loadInitialData(userId) {
            const db = getFirestore();
            const userRef = doc(db, "users", userId);
            const userSnap = await getDoc(userRef);
            
            if (userSnap.exists()) {
              const userData = userSnap.data();
              this.userName = userData.userName;
              this.userInfo = userData.user_info || 'No description provided';
              this.phoneNumber = userData.phone_number || 'No phone number provided';
            }
          }
        },
        created() {
          const auth = getAuth();
          onAuthStateChanged(auth, async (user) => {
            if (user) {
              this.userEmail = user.email;
              await this.loadInitialData(user.uid);
            } else {
              this.userEmail = 'No email available';
            }
          });
        }
      };
      </script>
      

<style scoped>
.card {
  width: 60%;
  margin: 0 auto;
  border-radius: 12px !important;
}

.card-title, .card-text {
  text-align: center;
}

img {
  width: 250px;
  border-radius: 50%;
  margin: 20px auto 20px auto;
}

@media screen and (max-width: 900px) {
  .card {
    width: 90%;
    margin: 0 auto;
  }

  img {
    width: 60%;
  }
}
</style>