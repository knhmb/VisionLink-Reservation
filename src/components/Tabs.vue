<template>
  <ion-tabs>
    <ion-router-outlet></ion-router-outlet>
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="projects" href="/projects">
        <ion-icon :icon="volumeMediumOutline"></ion-icon>
        Projects
      </ion-tab-button>
      <ion-tab-button tab="rennovation-schedule" href="/rennovation-schedule">
        <ion-icon :icon="easelOutline"></ion-icon>
        Rennovation Schedule
      </ion-tab-button>
      <ion-tab-button tab="profile" href="/profile">
        <ion-icon :icon="calendarOutline"></ion-icon>
        Profile
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script>
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonRouterOutlet,
} from "@ionic/vue";
import {
  volumeMediumOutline,
  easelOutline,
  calendarOutline,
  personOutline,
} from "ionicons/icons";

export default {
  components: {
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonRouterOutlet,
  },
  data() {
    return {
      volumeMediumOutline,
      easelOutline,
      calendarOutline,
      personOutline,
    };
  },
};
</script>

<style scoped>
ion-tabs {
  z-index: 9999 !important;
}

ion-tab-button {
  color: #c9cdd4;
  font-family: var(--ion-font-family);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  background: var(--ion-color-primary-contrast);
  white-space: nowrap;
}

ion-tab-button.tab-selected {
  /* color: var(--ion-color-primary); */
  color: #6e4d27;
}
</style>