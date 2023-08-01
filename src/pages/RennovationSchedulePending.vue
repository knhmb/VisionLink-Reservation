<template>
  <base-layout
    page-title="Rennovation Schedule"
    page-back-link="/rennovation-schedule"
    :hide-footer="true"
  >
    <rennovation-schedule>
      <ul>
        <li>Create and install suspended ceilings and partitions</li>
        <li>Create and install custom-made furniture and cabinets</li>
        <li>Install doors, windows, and glass walls</li>
        <li>Install lighting and air purification systems</li>
        <li>Paint and spray walls and furniture</li>
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