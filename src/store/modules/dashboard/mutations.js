export default {
  SET_NEWS(state, payload) {
    state.news = payload;
  },
  SET_BLOB_IMAGE(state, payload) {
    state.blobImage = payload;
  },
  SET_NEWS_DETAIL(state, payload) {
    state.newsDetail = payload;
  },
  SET_COURSE_CATEGORY(state, payload) {
    state.courseCategories = payload;
  },
  SET_COURSES(state, payload) {
    state.courses = payload;
  },
  SET_COURSE_DETAIL(state, payload) {
    state.courseDetail = payload;
  },
  SET_CMS(state, payload) {
    state.cms = payload;
  },
  SET_RESERVATIONS(state, payload) {
    state.reservations = payload;
  },
};
