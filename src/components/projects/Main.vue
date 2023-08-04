<template>
  <section class="card-content">
    <ion-grid>
      <ion-row>
        <ion-col size="6" v-for="item in 6" :key="item">
          <ion-card router-link="/projects/1">
            <ion-img alt="Silhouette of mountains" src="/assets/img.png" />
            <ion-card-content>
              (Title) 精美裝修設計項目 – 香港某地區綜合裝修方案,
              為您的生活創造獨特的美感...
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>
  </section>
</template>

<script>
import {
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonImg,
} from "@ionic/vue";

export default {
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
    IonImg,
  },
};
</script>

<style scoped>
.card-content {
  padding-left: 1rem;
  padding-right: 1rem;
}

ion-card {
  margin-top: 0;
  padding: 0.3rem;
  background: var(--ion-color-primary-contrast);
  margin-bottom: 0;
}

ion-card-content {
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--ion-text-color-primary-contrast);
  padding: 0.5rem 0 !important;
}

/* ion-img::part(image) {
  border-radius: 10px;
} */
</style>