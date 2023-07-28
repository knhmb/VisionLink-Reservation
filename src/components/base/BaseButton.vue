<template>
  <ion-button expand="block"><slot /></ion-button>
</template>

<script>
import { IonButton } from "@ionic/vue";

export default {
  components: {
    IonButton,
  },
};
</script>

<style scoped>
ion-button::part(native) {
  min-height: 50px;
  --box-shadow: none;
  font-family: var(--ion-font-family);
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  border-radius: 10px;
}
</style>