<template>
  <base-layout page-title="Course Detail" page-back-link="/course">
    <ion-img :src="blobImage"></ion-img>
    <div class="course-content">
      <p>{{ courseDetail.title }}</p>
      <p class="description">
        {{ courseDetail.content }}
      </p>
    </div>
  </base-layout>
</template>

<script>
import { IonImg } from "@ionic/vue";

export default {
  components: {
    IonImg,
  },
  computed: {
    courseDetail() {
      return this.$store.getters["dashboard/courseDetail"];
    },
    blobImage() {
      return this.$store.getters["dashboard/blobImage"];
    },
  },
  created() {
    this.$store
      .dispatch("dashboard/getCourseDetail", this.$route.params.id)
      .then(() => {
        this.$store.dispatch(
          "dashboard/getImageBlob",
          this.courseDetail.thumbnail
        );
      });
  },
};
</script>
  
  <style scoped>
.course-content {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.course-content p {
  color: var(--ion-color-primary);
  font-family: var(--ion-font-family);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}

.course-content p.description {
  color: #4e5969;
  font-size: 14px;
  font-weight: 400;
}

ion-img::part(image) {
  height: 15rem;
  width: 100%;
  object-fit: cover;
}
</style>