<template>
  <base-layout
    page-title="Rennovation Schedule"
    page-back-link="/rennovation-schedule"
    :hide-footer="true"
  >
    <rennovation-schedule>
      <div class="items" v-for="item in 4" :key="item">
        <div class="top">
          <ion-img src="/assets/check.png"></ion-img>
          <p>Site survey and measurement</p>
        </div>
        <slide>
          <ion-img src="/assets/image.png"></ion-img>
          <ion-img class="second" src="/assets/image.png"></ion-img>
        </slide>
      </div>
    </rennovation-schedule>
  </base-layout>
</template>
    
    <script>
import RennovationSchedule from "../components/base/RennovationSchedule.vue";
import Slide from "../components/projects-detail/Slide.vue";
import { IonImg } from "@ionic/vue";

export default {
  components: {
    RennovationSchedule,
    IonImg,
    Slide,
  },
};
</script>
    
<style scoped>
.items {
  margin-bottom: 0.5rem;
}

.top {
  display: flex;
  align-items: center;
}

.top p {
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  color: var(--ion-text-color-primary);
  margin-left: 0.5rem;
}

.second {
  margin-left: 0.5rem;
}
</style>