<template>
  <base-layout
    page-title="Rennovation Schedule"
    :hide-back-button="true"
    :add-padding="true"
  >
    <ion-card
      v-for="item in rennovationGroups"
      :key="item.id"
      :router-link="`/rennovation-schedule/${item.slug}`"
    >
      <img
        crossorigin="anonymous"
        :alt="item.name"
        :src="`http://localhost:3001/api/v1/system/uploads/${item.thumbnail[0].filename}`"
      />
      <!-- <ion-img :alt="item.name" :src="item.thumbnail[0].filename" /> -->
      <ion-card-content>
        {{ item.name }}
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
  computed: {
    rennovationGroups() {
      return this.$store.getters["dashboard/rennovationGroups"];
    },
  },
  created() {
    this.$store.dispatch("dashboard/getRennovationGroups");
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
  justify-content: space-between;
  padding-left: 0 !important;
  padding-right: 0 !important;
}

ion-img.arrow-right::part(image) {
  width: 0.7rem;
}

img {
  width: 100%;
  height: 10rem;
  object-fit: cover;
}
</style>