<template>
  <swiper :slides-per-view="3.5">
    <slot />
    <!-- <swiper-slide v-for="item in thumbnail" :key="item">
      <div class="box">
        <slot />
      </div>
    </swiper-slide> -->
  </swiper>
</template>
  
  <script>
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "@ionic/vue/css/ionic-swiper.css";

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
});
</script>

<style scoped>
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