<template>
  <!-- <base-layout
    
  > -->
  <ion-img src="/assets/image-3.png"></ion-img>
  <div class="content">
    <p>(Title) 香港某大樓2樓3室 - 裝修項目（一）</p>
    <div class="navs">
      <p
        @click="$router.push('/rennovation-schedule-in-progress')"
        :class="{
          'is-selected': $route.path === '/rennovation-schedule-in-progress',
        }"
      >
        In Progress
      </p>
      <p
        @click="$router.push('/rennovation-schedule-pending')"
        :class="{
          'is-selected': $route.path === '/rennovation-schedule-pending',
        }"
      >
        Pending
      </p>
      <p>Completed</p>
    </div>
    <slot />
  </div>
  <!-- </base-layout> -->
</template>
  
  <script>
import { IonImg, IonNav } from "@ionic/vue";

export default {
  components: {
    IonImg,
    IonNav,
  },
};
</script>
  
  <style scoped>
.content {
  padding: 0 1rem;
}

p {
  font-family: Poppins;
  font-size: 18px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--ion-text-color-primary-contrast);
  margin: 0;
  margin-top: 1rem;
}

ion-img::part(image) {
  height: 13rem;
  width: 100%;
  object-fit: cover;
}

.navs {
  display: flex;
  align-items: center;
}

.navs p {
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;
  color: #86909c;
  margin-right: 1rem;
}

.navs p.is-selected {
  font-weight: 600;
  color: var(--ion-color-primary-shade);
  border-bottom: 2px solid var(--ion-color-primary-shade);
  padding-bottom: 0.2rem;
}
</style>