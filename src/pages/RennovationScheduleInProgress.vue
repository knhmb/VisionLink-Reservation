<template>
  <base-layout
    page-title="Rennovation Schedule"
    page-back-link="/rennovation-schedule"
  >
    <rennovation-schedule>
      <ul>
        <li>Dismantle old renovation structures and facilities</li>
        <li>Arrange and modify water and electrical systems</li>
        <li>Install waterproof and soundproof layers</li>
        <li>Prepare and treat floors and walls</li>
        <li>Install tiles and wallpaper on floors and walls</li>
      </ul>
    </rennovation-schedule>
  </base-layout>
</template>

<script>
import RennovationSchedule from "../components/base/RennovationSchedule.vue";

export default {
  components: {
    RennovationSchedule,
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

li {
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  color: var(--ion-text-color-primary);
  margin-bottom: 1rem;
}
</style>