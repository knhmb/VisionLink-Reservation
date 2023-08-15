<template>
  <form>
    <ion-list>
      <ion-item lines="none">
        <div class="input-content">
          <div :class="{ error: v$.username.$errors.length }">
            <base-input
              v-model="username"
              placeholder="Username"
              required
            ></base-input>
          </div>
        </div>
        <div
          class="input-errors"
          v-for="error of v$.username.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <div :class="{ error: v$.email.$errors.length }">
            <base-input v-model="email" placeholder="Email"></base-input>
          </div>
          <p class="otp" @click="sendOtp">Send OTP</p>
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
          <div :class="{ error: v$.otp.$errors.length }">
            <base-input
              v-model="otp"
              placeholder="OTP"
              type="password"
            ></base-input>
          </div>
        </div>
        <div
          class="input-errors"
          v-for="error of v$.otp.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <div :class="{ error: v$.password.password.$errors.length }">
            <base-input
              v-model="password.password"
              placeholder="Password"
              type="password"
            ></base-input>
          </div>
        </div>
        <div
          class="input-errors"
          v-for="error of v$.password.password.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <div :class="{ error: v$.password.confirm.$errors.length }">
            <base-input
              v-model="password.confirm"
              placeholder="Confirm Password"
              type="password"
            ></base-input>
          </div>
        </div>
        <div
          class="input-errors"
          v-for="error of v$.password.confirm.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </ion-item>
    </ion-list>
    <base-button @click="submit">Create Account</base-button>
  </form>
</template>

<script>
import { IonList, IonItem, IonIcon, toastController } from "@ionic/vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";

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
      username: "",
      email: "",
      otp: "",
      password: {
        password: "",
        confirm: "",
      },
    };
  },
  validations() {
    return {
      username: { required, minLength: minLength(4) },
      password: {
        password: {
          required,
          minLength: minLength(6),
        },
        confirm: {
          required,
          sameAs: sameAs(this.password.password),
        },
      },
      email: { required, email },
      otp: { required },
    };
  },
  methods: {
    async submit() {
      const result = await this.v$.$validate();
      if (!result) {
        return;
      }
      // perform async actions
      const data = {
        username: this.username,
        password: this.password.password,
        password2: this.password.confirm,
        email: this.email,
        otp: this.otp,
      };
      this.$store
        .dispatch("auth/signUp", data)
        .then(() => {
          this.$router.replace("/login");
        })
        .catch((err) => {
          this.presentToast(err.response.data.message, "warning");
        });
    },
    async sendOtp() {
      const result = await this.v$.email.$validate();
      if (!result) {
        return;
      }
      this.$store
        .dispatch("auth/newAccountOTP", { email: this.email })
        .then(() => {
          this.presentToast(
            "OTP has been sent to the provided email",
            "success"
          );
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

p.otp {
  color: var(--ion-text-color-primary-contrast);
  font-family: var(--ion-font-family);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  position: absolute;
  top: 50%;
  right: 1.2rem;
  transform: translateY(-50%);
  z-index: 99;
  margin: 0;
  cursor: pointer;
}
</style>