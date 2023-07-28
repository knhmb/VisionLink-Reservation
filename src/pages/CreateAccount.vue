<template>
  <base-layout
    :add-padding="true"
    class="create-account"
    page-title="Create Account"
    page-back-link="/login"
    :hide-footer="true"
  >
    <h3>Enter your details to create account</h3>
    <create-account-form></create-account-form>
  </base-layout>
</template>

<script>
import CreateAccountForm from "../components/create-account/CreateAccountForm.vue";

export default {
  components: {
    CreateAccountForm,
  },
};
</script>

<style scoped>
h3 {
  color: var(--ion-text-color-primary-contrast);
  text-align: center;
  font-family: var(--ion-font-family);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  margin-bottom: 1.5rem;
}
</style>