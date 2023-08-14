<template>
  <form>
    <ion-list>
      <ion-item lines="none">
        <div class="input-content">
          <div :class="{ error: v$.email.$errors.length }">
            <base-input
              v-model="email"
              placeholder="Email"
              required
            ></base-input>
          </div>
        </div>
        <div
          class="input-errors"
          v-for="error of v$.email.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <div :class="{ error: v$.password.$errors.length }">
            <base-input
              v-model="password"
              placeholder="Password"
              required
              type="password"
            ></base-input>
          </div>
        </div>
        <div
          class="input-errors"
          v-for="error of v$.password.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </ion-item>
      <ion-item lines="none">
        <p class="forgot-password" @click="$router.push('/forgot-password')">
          Forgot Password?
        </p>
      </ion-item>
      <ion-item class="border-bottom" lines="none">
        <base-button @click="submit">Login</base-button>
      </ion-item>
      <ion-item lines="none">
        <base-button class="account-btn" router-link="/create-account"
          >Create Account</base-button
        >
      </ion-item>
    </ion-list>
  </form>
</template>
  
  <script>
import { IonIcon, IonList, IonItem, toastController } from "@ionic/vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  components: {
    IonIcon,
    IonList,
    IonItem,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  validations() {
    return {
      email: { required, email },
      password: { required },
    };
  },
  methods: {
    async submit() {
      this.$router.replace("/projects");
      const result = await this.v$.$validate();
      if (!result) {
        return;
      }
      // perform async actions
      const data = {
        username: this.email,
        password: this.password,
      };
      try {
        await this.$store.dispatch("auth/login", data);
        this.presentToast("LoggedIn!", "success");
        this.$router.replace("/projects");
      } catch (err) {
        this.presentToast(err.response.data.message, "warning");
      }
      // this.$store
      //   .dispatch("auth/login", data)
      //   .then(() => {
      //     this.presentToast("LoggedIn!", "success");
      //     this.$router.replace("/news");
      //   })
      //   .catch((err) => {
      //     this.presentToast(err.response.data.message, "warning");
      //   });
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
ion-img {
  margin-top: 3.5rem;
  width: 20rem;
  margin-left: auto;
  margin-right: auto;
}

p.forgot-password {
  color: var(--ion-text-color-primary-contrast);
  font-size: 16px;
  text-decoration-line: underline;
  margin-top: 0;
  font-family: var(--ion-font-family);
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  cursor: pointer;
  margin-right: auto;
}

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

ion-item.border-bottom {
  border-bottom: 1px solid #e5e6eb;
}

ion-button {
  width: 100%;
  margin-bottom: 1rem;
  font-weight: 600;
}

ion-button.account-btn {
  --background: var(--ion-text-color-primary-contrast);
  --border-color: var(--ion-text-color-primary-contrast);
  --border-width: 1px;
  --border-style: solid;
  color: var(--ion-color-primary-contrast);
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