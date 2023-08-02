<template>
  <base-layout
    page-title="Projects Detail"
    page-back-link="/projects"
    :hide-footer="true"
  >
    <ion-img src="/assets/Banner.png"></ion-img>
    <div class="projects-content">
      <Main />
    </div>
  </base-layout>
</template>

<script>
import { IonImg } from "@ionic/vue";
import Main from "../components/projects-detail/Main.vue";

export default {
  components: {
    IonImg,
    Main,
  },
  computed: {
    newsDetail() {
      return this.$store.getters["dashboard/newsDetail"];
    },
    blobImage() {
      return this.$store.getters["dashboard/blobImage"];
    },
  },
  created() {
    this.$store
      .dispatch("dashboard/getNewsDetail", this.$route.params.id)
      .then(() => {
        this.$store.dispatch(
          "dashboard/getImageBlob",
          this.newsDetail.thumbnail
        );
      });
  },
};
</script>

<style scoped>
.projects-content {
  padding-left: 1rem;
  padding-right: 1rem;
}

.projects-content p {
  color: var(--ion-color-primary);
  font-family: var(--ion-font-family);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}

.projects-content p:nth-of-type(2) {
  color: #4e5969;
  font-size: 14px;
  font-weight: 400;
}

ion-img::part(image) {
  height: 13rem;
  width: 100%;
  object-fit: cover;
}
</style>