export default {
  SET_PROJECTS(state, payload) {
    state.projects = payload;
  },
  SET_BLOB_IMAGE(state, payload) {
    state.blobImage = payload;
  },
  SET_PROJECT_DETAIL(state, payload) {
    state.projectDetails = payload;
  },
  SET_RENNOVATION_GROUPS(state, payload) {
    state.rennovationGroups = payload;
  },
  SET_RENNOVATION_CATEGORIES(state, payload) {
    state.rennovationCategories = payload;
  },
  SET_CMS(state, payload) {
    state.cms = payload;
  },
};
