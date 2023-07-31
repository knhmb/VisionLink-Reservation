<template>
  <base-layout page-title="Projects" :hideBackButton="true">
    <div class="project-image">
      <ion-img
        src="assets/Leonardo_Diffusion_hand_drawn_style_virtual_interior_design_be_0 1.png"
      ></ion-img>
      <div class="blur-content">
        <div class="blur">
          <p>Welcome to VisionLink</p>
        </div>
      </div>
    </div>
    <Main />
    <!-- <template v-if="news.length > 0">
      <ion-card
        v-for="item in news"
        :key="item.id"
        :router-link="`/news/${item.slug}`"
      >

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
    </template> -->
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
import Main from "../components/projects/Main.vue";

export default {
  components: {
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle,
    IonImg,
    IonIcon,
    Main,
  },
  data() {
    return {
      chevronForwardOutline,
    };
  },
  computed: {
    // news() {
    //   return this.$store.getters["dashboard/news"];
    // },
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
    // this.$store.dispatch("dashboard/getNews");
  },
};
</script>

<style scoped>
.project-image {
  position: relative;
  /* display: flex;
  align-items: center;
  justify-content: center; */
}

ion-image {
  border-radius: 0;
}

.blur-content {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
}

.project-image ion-img::part(image) {
  border-radius: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-image .blur {
  background: #ffe7c280;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 18rem;
  border-radius: 10px;
  backdrop-filter: blur(1px);
}

.project-image .blur p {
  font-family: Poppins;
  font-size: 18px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
  color: var(--ion-color-primary);
  margin: 0;
}

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