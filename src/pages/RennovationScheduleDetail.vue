<template>
  <base-layout
    page-title="Rennovation Schedule"
    page-back-link="/rennovation-schedule"
    :hide-footer="true"
  >
    <rennovation-schedule @setNewStatus="newStatus">
      <template v-for="item in rennovationCategories" :key="item.id">
        <ul :class="{ 'no-style': status === 'Completed' }">
          <li>
            {{ item.name }}
          </li>
        </ul>
        <slide v-if="status === 'Completed'">
          <swiper-slide v-for="img in item.thumbnail" :key="img.uid">
            <div class="box">
              <ion-img :src="img.filename"></ion-img>
            </div>
          </swiper-slide>
        </slide>
      </template>
    </rennovation-schedule>
  </base-layout>
</template>
  
  <script>
import RennovationSchedule from "../components/base/RennovationSchedule.vue";
import Slide from "../components/projects-detail/Slide.vue";
import { SwiperSlide } from "swiper/vue";
import { IonImg } from "@ionic/vue";

import "swiper/css";
import "@ionic/vue/css/ionic-swiper.css";

export default {
  components: {
    RennovationSchedule,
    Slide,
    SwiperSlide,
    IonImg,
  },
  data() {
    return {
      status: "",
    };
  },
  computed: {
    rennovationCategories() {
      return this.$store.getters["dashboard/rennovationCategories"];
    },
  },
  methods: {
    newStatus(status) {
      this.status = status;
    },
  },
};
</script>
  
<style scoped>
ion-item {
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  color: var(--ion-text-color-primary);
  margin: 0;
}

ul {
  list-style-type: disc;
  padding-left: 1.1rem;
  padding-right: 1.1rem;
}

ul.no-style {
  list-style: none;
}

li {
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  color: var(--ion-text-color-primary);
  margin-bottom: 1rem;
}

ul.no-style li::before {
  content: "✓";
  color: #009a29;
  position: absolute;
  left: 1rem;
}

/* .box {
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
} */
</style>