<template>
  <base-layout page-title="Reservation" :hide-back-button="true">
    <ion-img src="/assets/image-11.png"></ion-img>
    <h3>
      網上留位 <br />
      Online Reservation
    </h3>
    <div class="reservation-content">
      <p>
        Please ensure the information of your child in the account is accurate
        as we will use it for registration.
      </p>
      <div :class="{ error: v$.courseCategory.$errors.length }">
        <ion-select
          v-model="courseCategory"
          :toggleIcon="chevronDownOutline"
          placeholder="Course Category"
          shape="round"
          fill="outline"
        >
          <ion-select-option
            v-for="category in courseCategories"
            :key="category.id"
            :value="category.slug"
            >{{ category.name }}</ion-select-option
          >
        </ion-select>
        <div
          class="input-errors"
          v-for="error of v$.courseCategory.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div :class="{ error: v$.course.$errors.length }">
        <ion-select
          v-model="course"
          :toggleIcon="chevronDownOutline"
          placeholder="Course"
          shape="round"
          fill="outline"
        >
          <ion-select-option
            v-for="course in courses"
            :key="course.id"
            :value="course.slug"
            >{{ course.title }}</ion-select-option
          >
        </ion-select>
        <div
          class="input-errors"
          v-for="error of v$.course.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div :class="{ error: v$.contactName.$errors.length }">
        <base-input v-model="contactName" placeholder="Contact Name" />
        <div
          class="input-errors"
          v-for="error of v$.contactName.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div :class="{ error: v$.contactNumber.$errors.length }">
        <base-input placeholder="Contact Number" v-model="contactNumber" />
        <div
          class="input-errors"
          v-for="error of v$.contactNumber.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <base-button @click="submit">Submit</base-button>
    </div>
    <Dialog :is-open="isOpen" @closeDialog="isOpen = $event" />
  </base-layout>
</template>

<script>
import {
  IonSelect,
  IonImg,
  IonButton,
  IonSelectOption,
  toastController,
} from "@ionic/vue";
import { chevronDownOutline } from "ionicons/icons";
import Dialog from "../components/reservation/Dialog.vue";
import { useVuelidate } from "@vuelidate/core";
import { required, numeric } from "@vuelidate/validators";

export default {
  components: {
    Dialog,
    IonSelect,
    IonImg,
    IonButton,
    IonSelectOption,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      chevronDownOutline,
      contactName: "",
      contactNumber: "",
      course: "",
      courseCategory: "",
      isOpen: false,
    };
  },
  validations() {
    return {
      contactName: { required },
      contactNumber: { required, numeric },
      course: { required },
      courseCategory: { required },
    };
  },
  computed: {
    courses() {
      return this.$store.getters["dashboard/courses"];
    },
    courseCategories() {
      return this.$store.getters["dashboard/courseCategories"];
    },
    userDetails() {
      return this.$store.getters["auth/userDetails"];
    },
  },
  methods: {
    async submit() {
      console.log("clicked");
      const result = await this.v$.$validate();
      if (!result) {
        return;
      }
      // perform async actions
      const data = {
        contactName: this.contactName,
        contactNumber: this.contactNumber,
        reservationCourse: this.course,
        courseCategory: this.courseCategory,
        userId: this.userDetails.id,
      };
      this.$store
        .dispatch("dashboard/reservation", data)
        .then(() => {
          this.isOpen = true;
          this.contactName = "";
          this.contactNumber = "";
          this.course = "";
          this.courseCategory = "";
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
    this.$store.dispatch("dashboard/getCourseCategory");
    this.$store.dispatch("dashboard/getCourses");
  },
};
</script>

<style scoped>
.reservation-content {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

h3 {
  color: var(--ion-color-primary-contrast);
  font-family: var(--ion-font-family);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  position: absolute;
  top: 1.5rem;
  left: 1rem;
}

p {
  color: var(--ion-text-color-primary);
  text-align: center;
  font-family: var(--ion-font-family);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

ion-select {
  width: 100%;
  /* min-height: 50px !important; */
  background: var(--ion-color-primary-contrast);
  border-radius: 500px;
  padding: 0rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid var(--ion-color-primary);
}

ion-select::part(container) {
  width: 100%;
}

ion-input {
  margin-bottom: 1rem;
}

:deep(.native-input) {
  padding-right: 1rem;
  padding-left: 1rem;
}
</style>