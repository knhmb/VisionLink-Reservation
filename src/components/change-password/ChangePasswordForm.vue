<template>
  <form>
    <ion-list>
      <ion-item lines="none">
        <div class="input-content">
          <div :class="{ error: v$.currentPassword.$errors.length }">
            <base-input
              type="password"
              v-model="currentPassword"
              placeholder="Current Password"
              required
            ></base-input>
          </div>
        </div>
        <div
          class="input-errors"
          v-for="error of v$.currentPassword.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <div :class="{ error: v$.newPassword.$errors.length }">
            <base-input
              type="password"
              v-model="newPassword"
              placeholder="New Password"
              required
            ></base-input>
          </div>
        </div>
        <div
          class="input-errors"
          v-for="error of v$.newPassword.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <div :class="{ error: v$.confirmNewPassword.$errors.length }">
            <base-input
              placeholder="Confirm New Password"
              required
              type="password"
              v-model="confirmNewPassword"
            ></base-input>
          </div>
        </div>
        <div
          class="input-errors"
          v-for="error of v$.confirmNewPassword.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </ion-item>
    </ion-list>
    <base-button @click="submit">Reset Password</base-button>
  </form>
</template>
  
  <script>
import { IonList, IonItem, IonIcon, toastController } from "@ionic/vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, sameAs } from "@vuelidate/validators";

export default {
  components: {
    IonList,
    IonItem,
    IonIcon,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    };
  },
  validations() {
    return {
      currentPassword: { required },
      newPassword: { required, minLength: minLength(6) },
      confirmNewPassword: { required, sameAs: sameAs(this.newPassword) },
    };
  },
  computed: {
    userDetails() {
      return this.$store.getters["auth/userDetails"];
    },
  },
  methods: {
    async submit() {
      const result = await this.v$.$validate();
      if (!result) {
        return;
      }

      const data = {
        currentPass: this.currentPassword,
        password: this.newPassword,
        password2: this.confirmNewPassword,
      };

      this.$store
        .dispatch("auth/updateUser", { id: this.userDetails.id, data })
        .then(() => {
          this.presentToast("Password Changed", "success");
        })
        .catch((err) => {
          this.presentToast(err.response.data.message, "warning");
        });
    },
    async presentToast(message, color) {
      const toast = await toastController.create({
        message: message,
        duration: 1500,
        position: "top",
        color: color,
      });

      await toast.present();
    },
  },
};
</script>
  
  <style scoped>
.input-content {
  position: relative;
  width: 100%;
}

ion-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 99;
}

ion-item {
  --padding-start: 0;
  --inner-padding-end: 0;
}

ion-item::part(native) {
  display: flex;
  flex-direction: column;
}

.input-errors {
  width: 100%;
  text-align: start;
}
</style>