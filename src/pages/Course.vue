<template>
  <base-layout page-title="Course" :add-padding="true" :hide-back-button="true">
    <div class="pills-content" v-if="courseCategories.length > 0">
      <div
        v-for="courseCat in courseCategories"
        :key="courseCat.id"
        class="pills"
        :class="{ 'is-selected': currentOption === courseCat.slug }"
        @click="setOption(courseCat.slug)"
      >
        {{ courseCat.name }}
      </div>
      <!-- <div
        class="pills"
        :class="{ 'is-selected': currentOption === 'primary' }"
        @click="setOption('primary')"
      >
        Primary
      </div>
      <div
        class="pills"
        :class="{ 'is-selected': currentOption === 'secondary' }"
        @click="setOption('secondary')"
      >
        Secondary
      </div>
      <div
        class="pills"
        :class="{ 'is-selected': currentOption === 'others' }"
        @click="setOption('others')"
      >
        Others
      </div> -->
    </div>
    <Card :current-option="currentOption" />
  </base-layout>
</template>

<script>
import Card from "../components/course/Card.vue";

export default {
  components: {
    Card,
  },
  data() {
    return {
      currentOption: "",
    };
  },
  computed: {
    courseCategories() {
      return this.$store.getters["dashboard/courseCategories"];
    },
  },
  methods: {
    setOption(option) {
      this.currentOption = option;
    },
  },
  created() {
    this.$store.dispatch("dashboard/getCourseCategory");
  },
};
</script>

<style scoped>
.pills-content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
}

.pills {
  border-radius: 100px;
  background: var(--ion-color-primary-contrast);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 6.7rem;
  padding: 0.6rem;
  transition: 0.2s ease-out;
}

.pills:nth-of-type(2) {
  margin: 0 1rem;
}

.pills.is-selected {
  background: var(--ion-color-primary);
  color: var(--ion-color-primary-contrast);
}
</style>