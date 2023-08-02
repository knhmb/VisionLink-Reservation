<template>
  <form>
    <ion-list>
      <ion-item lines="none">
        <div class="input-content">
          <base-input
            v-model="id"
            disabled
            placeholder="Id"
            required
          ></base-input>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <base-input
            v-model="email"
            disabled
            placeholder="Email"
            required
          ></base-input>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <base-input placeholder="Username" required></base-input>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <base-input placeholder="Phone"></base-input>
        </div>
      </ion-item>
    </ion-list>
    <base-button>Save</base-button>
  </form>
</template>

<script>
import { IonList, IonItem, IonIcon } from "@ionic/vue";

export default {
  components: {
    IonList,
    IonItem,
    IonIcon,
  },
  data() {
    return {
      id: "19729461",
      email: "chantaiman@mail.com",
    };
  },
};
</script>

<style scoped>
.input-content {
  position: relative;
  width: 100%;
}

ion-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 99;
}

ion-item {
  --padding-start: 0;
  --inner-padding-end: 0;
}
</style>