<template>
  <form>
    <ion-list>
      <ion-item lines="none">
        <div class="input-content">
          <base-input
            v-model="id"
            disabled
            placeholder="Id"
            required
          ></base-input>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <base-input
            v-model="email"
            disabled
            placeholder="Email"
            required
          ></base-input>
        </div>
      </ion-item>
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
          <div :class="{ error: v$.phone.$errors.length }">
            <base-input v-model="phone" placeholder="Phone"></base-input>
          </div>
        </div>
        <div
          class="input-errors"
          v-for="error of v$.phone.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </ion-item>
    </ion-list>
    <base-button @click="submit">Save</base-button>
  </form>
</template>

<script>
import { IonList, IonItem, IonIcon, toastController } from "@ionic/vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";

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
      id: "19729461",
      email: "chantaiman@mail.com",
      username: "",
      phone: "",
    };
  },
  validations() {
    return {
      username: { required, minLength: minLength(4) },
      phone: {},
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
        username: this.username,
        phone: this.phone,
      };

      this.$store
        .dispatch("auth/updateUser", {
          id: this.userDetails.id,
          data,
        })
        .then(() => {
          this.presentToast("Data Updated", "success");
          this.$store.dispatch("auth/getUser", this.userDetails.id);
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
  created() {
    this.id = this.userDetails.id;
    this.email = this.userDetails.email;
    this.username = this.userDetails.username;
    this.phone = this.userDetails.phone;
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