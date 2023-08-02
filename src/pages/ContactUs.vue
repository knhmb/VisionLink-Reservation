<template>
  <base-layout
    page-title="Contact Us"
    :add-padding="true"
    :hide-footer="true"
    page-back-link="/profile"
  >
    <p>Address: Tel: +852 Email:</p>
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