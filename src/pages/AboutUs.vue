<template>
  <base-layout
    page-title="About Us"
    :add-padding="true"
    :hide-footer="true"
    page-back-link="/profile"
  >
    <p>
      Visionlink Holding Limited is a leading interior design and renovation
      company based in [Hong Kong], dedicated to providing high-quality and
      innovative design solutions for residential and commercial clients. With
      years of experience in the industry, our team of professional designers,
      architects, and craftsmen are committed to delivering exceptional results
      that meet our clients' needs and exceed their expectations. At Visionlink,
      our mission is to transform our clients' spaces into functional,
      comfortable, and beautiful environments that reflect their unique
      personalities and visions. We offer a full range of services, from design
      consultation and project management to construction and installation,
      ensuring a seamless and stress-free process for our clients. Our designs
      are tailored to each client's specific requirements, using the latest
      technologies and materials to ensure quality and durability. We pride
      ourselves on our attention to detail, craftsmanship, and customer service,
      and strive to build lasting relationships with our clients. Our portfolio
      includes a wide range of successful projects, from luxury apartments and
      houses to commercial offices and retail stores. Contact us today to learn
      more about how we can bring your vision to life and create the space of
      your dreams. ShareLikeDislike
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