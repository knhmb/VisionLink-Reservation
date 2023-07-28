<template>
  <base-layout
    :page-title="singleCms.title"
    :add-padding="true"
    :hide-footer="true"
    page-back-link="/account"
  >
    <p>
      {{ singleCms.content }}
    </p>
  </base-layout>
</template>

<script>
export default {
  computed: {
    cms() {
      return this.$store.getters["dashboard/cms"];
    },
    singleCms() {
      return this.cms.find((item) => item.slug === "page-privacy-policy");
    },
  },
};
</script>

<style scoped>
p {
  color: #4e5969;
  font-family: var(--ion-font-family);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin: 0;
  padding: 0 1rem;
}
</style>