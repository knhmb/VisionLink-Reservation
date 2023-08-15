import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
  namespaced: true,
  state() {
    return {
      projects: [],
      blobImage: "",
      projectDetails: {},
      rennovationGroups: [],
      rennovationCategories: [],
      cms: [],
    };
  },
  getters,
  mutations,
  actions,
};
