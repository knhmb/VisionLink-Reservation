import axios from "axios";

export default {
  async getNews(context) {
    const response = await axios.get("api/v1/news");
    context.commit("SET_NEWS", response.data.items);
  },
  async getImageBlob(context, payload) {
    const response = await axios.get(`/api/v1/system/uploads/${payload}`, {
      responseType: "blob",
    });
    const url = URL.createObjectURL(response.data);
    context.commit("SET_BLOB_IMAGE", url);
  },
  async getNewsDetail(context, payload) {
    const response = await axios.get(`api/v1/news/${payload}`);
    context.commit("SET_NEWS_DETAIL", response.data.item);
  },
  async getCourseCategory(context) {
    const response = await axios.get("api/v1/course/category");
    context.commit("SET_COURSE_CATEGORY", response.data.items);
  },
  async getCourses(context) {
    const response = await axios.get("api/v1/course/management");
    context.commit("SET_COURSES", response.data.items);
  },
  async getCourseDetail(context, payload) {
    const response = await axios.get(`api/v1/course/management/${payload}`);
    context.commit("SET_COURSE_DETAIL", response.data.item);
  },
  async reservation(_, payload) {
    await axios.post("api/v1/reservation", payload);
  },
  async getCms(context) {
    const response = await axios.get("api/v1/cms/contents");
    context.commit("SET_CMS", response.data.items);
  },
  async getReservations(context) {
    const response = await axios.get("api/v1/reservation");
    context.commit("SET_RESERVATIONS", response.data.items);
  },
};
