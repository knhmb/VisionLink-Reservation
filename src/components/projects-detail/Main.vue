<template>
  <h3>
    {{ projectDetail.title }}
  </h3>
  <slide>
    <swiper-slide v-for="item in projectDetail.thumbnail" :key="item">
      <div class="box">
        <ion-img :src="item.filename"></ion-img>
      </div>
    </swiper-slide>
  </slide>
  <p>
    {{ projectDetail.content }}
  </p>
</template>

<script>
import Slide from "./Slide.vue";
import { IonImg } from "@ionic/vue";
import { SwiperSlide } from "swiper/vue";

import "swiper/css";
import "@ionic/vue/css/ionic-swiper.css";

export default {
  props: ["projectDetail"],
  components: {
    Slide,
    IonImg,
    SwiperSlide,
  },
  computed: {
    blobImage() {
      return this.$store.getters["dashboard/blobImage"];
    },
  },
};
</script>

<style scoped>
h3 {
  font-family: Poppins;
  font-size: 18px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--ion-text-color-primary-contrast);
}

p {
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--ion-text-color-primary);
}

.box {
  width: 7rem;
  height: 7rem;
  border-radius: 5px;
  background-color: #f7f8fa;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper .swiper-slide {
  justify-content: flex-start;
}

ion-img::part(image) {
  width: 2rem;
}

:deep(.swiper-wrapper) {
  gap: 8px;
}
</style>