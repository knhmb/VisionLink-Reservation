<template>
  <base-layout
    page-title="Account"
    :hide-back-button="true"
    :add-padding="true"
  >
    <ion-card>
      <div class="item" @click="$router.push('/edit-profile')">
        <p>Edit Profile</p>
        <ion-icon :icon="chevronForwardOutline"></ion-icon>
      </div>
      <div class="item" @click="$router.push('/change-password')">
        <p>Change Password</p>
        <ion-icon :icon="chevronForwardOutline"></ion-icon>
      </div>
      <div class="item" @click="$router.push('/privacy-policy')">
        <p>Privacy Policy</p>
        <ion-icon :icon="chevronForwardOutline"></ion-icon>
      </div>
      <div class="item" @click="$router.push('/terms-conditions')">
        <p>Terms & Conditions</p>
        <ion-icon :icon="chevronForwardOutline"></ion-icon>
      </div>
      <div class="item" @click="$router.push('/about-us')">
        <p>About Us</p>
        <ion-icon :icon="chevronForwardOutline"></ion-icon>
      </div>
      <div class="item" @click="$router.push('/contact-us')">
        <p>Contact Us</p>
        <ion-icon :icon="chevronForwardOutline"></ion-icon>
      </div>
      <div class="item" @click="logout">
        <p>Logout</p>
      </div>
    </ion-card>
    <base-button id="open-delete-dialog">Delete Account</base-button>
    <delete-account-dialog></delete-account-dialog>
  </base-layout>
</template>

<script>
import { IonIcon, IonCard } from "@ionic/vue";
import { chevronForwardOutline } from "ionicons/icons";
import DeleteAccountDialog from "../components/account/DeleteAccountDialog.vue";

export default {
  components: {
    IonIcon,
    IonCard,
    DeleteAccountDialog,
  },
  data() {
    return {
      chevronForwardOutline,
    };
  },
  methods: {
    logout() {
      this.$router.replace("/login");
    },
  },
  created() {
    this.$store.dispatch("dashboard/getCms");
  },
};
</script>

<style scoped>
ion-card {
  margin-top: 0;
  --background: var(--ion-color-primary-contrast);
}

ion-item {
  --padding-start: 0;
  --inner-padding-end: 0;
  --border-color: #e5e6eb;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #e5e6eb;
  padding-bottom: 0.5rem;
}

.item:last-of-type {
  border: none;
}

.item p {
  color: var(--ion-text-color-primary);
  font-family: var(--ion-font-family);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 0.5rem;
}

.item p,
.item ion-icon {
  padding: 0 1rem;
}

ion-icon {
  font-size: 1.5rem;
  color: #c9cdd4;
}

ion-button {
  --background: #f53f3f;
  --background-activated: #eb7b7bc7;
}
</style>