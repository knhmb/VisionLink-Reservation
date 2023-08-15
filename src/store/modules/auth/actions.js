import axios from "axios";

export default {
  async signUp(_, payload) {
    const response = await axios.post("api/v1/accounts", payload);
    console.log(response);
  },
  async newAccountOTP(_, payload) {
    await axios.post("api/v1/accounts/new-account-otp", payload);
  },
  async forgotPasswordOTP(_, payload) {
    await axios.post("api/v1/accounts/reset-password-otp", payload);
  },
  async login(context, payload) {
    const response = await axios.post("api/v1/authenticate", payload);
    context.commit("LOGIN", response.data);
  },
  async validateUser(context, payload) {
    const response = await axios.get("/api/v1/authenticate", {
      headers: {
        Authorization: `Bearer ${payload}`,
      },
    });
    context.commit("LOGIN", response.data);
  },
  async resetPassword(_, payload) {
    await axios.post("api/v1/accounts/reset-password", payload);
  },
  async deleteAccount(_, payload) {
    await axios.delete(`api/v1/accounts/${payload}`);
  },
  async updateUser(_, payload) {
    await axios.put(`api/v1/accounts/${payload.id}`, payload.data);
  },
  async getUser(context, payload) {
    const response = await axios.get(`api/v1/accounts/${payload}`);
    context.commit("SET_USER", response.data.item);
  },
};
