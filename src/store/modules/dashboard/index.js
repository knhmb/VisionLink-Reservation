import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
  namespaced: true,
  state() {
    return {
      news: [],
      blobImage: "",
      newsDetail: {},
      courseCategories: [],
      courses: [],
      courseDetail: {},
      cms: [],
      reservations: [],
    };
  },
  getters,
  mutations,
  actions,
};
