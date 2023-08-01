<template>
  <base-layout
    title="Rennovation Schedule"
    :hide-back-button="true"
    :add-padding="true"
  >
    <ion-card router-link="/rennovation-schedule-in-progress">
      <ion-img
        alt="Silhouette of mountains"
        src="../../../public/assets/image-2.png"
      />
      <ion-card-content>
        (Title) 精美裝修設計項目 – 香港某地區綜合裝修方案,
        為您的生活創造獨特的美感...
        <ion-img class="arrow-right" src="/assets/arrow-right.png"></ion-img>
      </ion-card-content>
    </ion-card>
  </base-layout>
</template>

<script>
import { IonCard, IonCardContent, IonImg } from "@ionic/vue";

export default {
  components: {
    IonCard,
    IonCardContent,
    IonImg,
  },
};
</script>

<style scoped>
ion-card {
  margin-top: 0;
  background: var(--ion-color-primary-contrast);
  padding: 0.5rem;
  border-radius: 10px;
}

ion-img::part(image) {
  border-radius: 5px;
}

ion-card-content {
  font-family: Poppins;
  font-size: 18px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--ion-text-color-primary-contrast);
  display: flex;
  align-items: center;
  padding-left: 0 !important;
  padding-right: 0 !important;
}

ion-img.arrow-right::part(image) {
  width: 0.7rem;
}
</style>