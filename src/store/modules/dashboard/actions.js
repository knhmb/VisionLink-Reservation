import axios from "axios";

export default {
  async getProjects(context) {
    const response = await axios.get("/api/v1/project");
    context.commit("SET_PROJECTS", response.data.items);
  },
  async getImageBlob(context, payload) {
    const response = await axios.get(`/api/v1/system/uploads/${payload}`, {
      responseType: "blob",
    });
    const url = URL.createObjectURL(response.data);
    context.commit("SET_BLOB_IMAGE", url);
  },
  async getProjectDetail(context, payload) {
    const response = await axios.get(`api/v1/project/${payload}`);
    context.commit("SET_PROJECT_DETAIL", response.data.item);
  },
  async getRennovationGroups(context) {
    const response = await axios.get("api/v1/renovation/groups");
    context.commit("SET_RENNOVATION_GROUPS", response.data.items);
  },
  async getRennovationCategories(context, payload) {
    const response = await axios.get("api/v1/renovation/categories", {
      params: {
        filter: `group:${payload.slug},status:${payload.status}`,
      },
    });
    context.commit("SET_RENNOVATION_CATEGORIES", response.data.items);
  },
  async getCms(context) {
    const response = await axios.get("api/v1/cms/contents");
    context.commit("SET_CMS", response.data.items);
  },
};
