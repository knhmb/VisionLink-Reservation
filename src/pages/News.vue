<template>
  <base-layout page-title="News" :hideBackButton="true" :add-padding="true">
    <template v-if="news.length > 0">
      <ion-card
        v-for="item in news"
        :key="item.id"
        :router-link="`/news/${item.slug}`"
      >
        <!-- <ion-card-header>
        <ion-card-title>Card Title</ion-card-title>
        <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
      </ion-card-header> -->

        <ion-card-content>
          <ion-img
            @load="getBlobImage(item.thumbnail)"
            :src="`/api/v1/system/uploads/${item.thumbnail}`"
            :alt="item.title"
          ></ion-img>
          <div class="content">
            <p>{{ item.title }}</p>
            <ion-icon size="large" :icon="chevronForwardOutline"></ion-icon>
          </div>
        </ion-card-content>
      </ion-card>
    </template>
  </base-layout>
</template>

<script>
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonImg,
  IonIcon,
} from "@ionic/vue";
import { chevronForwardOutline } from "ionicons/icons";

export default {
  components: {
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle,
    IonImg,
    IonIcon,
  },
  data() {
    return {
      chevronForwardOutline,
    };
  },
  computed: {
    news() {
      return this.$store.getters["dashboard/news"];
    },
  },
  // methods: {
  //   async getBlobImage(img) {
  //     console.log("loaded");
  //     const response = await axios.get(`api/v1/system/uploads/${img}`, {
  //       responseType: "blob",
  //     });
  //     const url = URL.createObjectURL(response.data);
  //     this.blobImgs.push(url);
  //   },
  // },
  created() {
    this.$store.dispatch("dashboard/getNews");
  },
};
</script>

<style scoped>
.item {
  margin-bottom: 1rem;
}

ion-card {
  margin-top: 0;
}

ion-img::part(image) {
  border-radius: 10px;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

.content p {
  color: var(--ion-color-primary);
  font-family: var(--ion-font-family);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}
</style>