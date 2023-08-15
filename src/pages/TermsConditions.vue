<template>
  <base-layout
    :page-title="singleCms.title"
    :add-padding="true"
    :hide-footer="true"
    page-back-link="/profile"
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
      return this.cms.find((item) => item.slug === "page-terms-condition");
    },
  },
};
</script>

<style scoped>
p {
  font-family: Lato;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  color: var(--ion-text-color-primary);
  margin: 0;
  padding: 0 1rem;
}
</style>