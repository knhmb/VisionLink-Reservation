<template>
  <div
    class="card"
    v-for="course in courses"
    :key="course.id"
    @click="$router.push(`/course/${course.slug}`)"
  >
    <div class="left">
      <ion-img :src="course.thumbnail"></ion-img>
    </div>
    <div class="right">
      <p class="title">{{ course.title }}</p>
      <p>{{ course.content.substring(0, 45) }}...</p>
    </div>
  </div>
  <!-- <ion-card>

    <ion-card-content>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-img src="/assets/img.png"></ion-img>
          </ion-col>
          <ion-col>
            Here's a small text description for the card content. Nothing more,
            nothing less.
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-card-content>
  </ion-card> -->
</template>

<script>
import { IonCard, IonCardHeader, IonCardContent, IonImg } from "@ionic/vue";

export default {
  props: ["currentOption"],
  components: {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonImg,
  },
  computed: {
    courses() {
      if (!this.currentOption) {
        return this.$store.getters["dashboard/courses"];
      }
      return this.$store.getters["dashboard/courses"].filter(
        (course) => course.category[0] === this.currentOption
      );
    },
  },
  created() {
    this.$store.dispatch("dashboard/getCourses");
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 1rem;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 0.5rem;
  display: flex;
  /* align-items: center; */
  background: var(--ion-color-primary-contrast);
}

.card ion-img {
  width: 10rem;
}

.card .right {
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card p.title {
  font-weight: 700;
  width: 100%;
}

.card p {
  /* overflow: hidden; */
  color: var(--ion-color-primary);
  /* text-overflow: ellipsis; */
  /* white-space: nowrap; */
  font-family: var(--ion-font-family);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin: 0;
  /* width: 10rem; */
}
</style>