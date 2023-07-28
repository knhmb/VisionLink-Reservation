<template>
  <base-layout
    :page-title="newsDetail && newsDetail.title"
    page-back-link="/news"
  >
    <ion-img :src="blobImage"></ion-img>
    <div class="news-content">
      <p>{{ newsDetail ? newsDetail.title : "No Data" }}</p>
      <p>
        {{ newsDetail ? newsDetail.content : "No Data" }}
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
.news-content {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.news-content p {
  color: var(--ion-color-primary);
  font-family: var(--ion-font-family);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}

.news-content p:nth-of-type(2) {
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