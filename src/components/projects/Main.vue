<template>
  <section class="card-content">
    <ion-grid>
      <ion-row>
        <ion-col size="6" v-for="project in projects" :key="project.id">
          <ion-card :router-link="`/projects/${project.slug}`">
            <img
              crossorigin="anonymous"
              :alt="project.thumbnail[0].name"
              :src="`http://localhost:3001/api/v1/system/uploads/${project.thumbnail[0].filename}`"
            />
            <!-- <ion-img
              crossorigin="anonymous"
              :alt="project.thumbnail[0].name"
              :src="`http://localhost:3001/api/v1/system/uploads/${project.thumbnail[0].filename}`"
            /> -->
            <ion-card-content>
              {{ project.title }}
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
  props: ["projects"],
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
    IonImg,
  },
  computed: {
    protocol() {
      return window.location.origin;
    },
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
img {
  width: 100%;
  object-fit: cover;
  height: 8rem;
}

/* ion-img::part(image) {
  border-radius: 10px;
} */
</style>