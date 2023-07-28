import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/";

const setAuthHeader = (token) => {
  if (token) {
    axios.defaults.headers = {
      Authorization: "Bearer " + token,
    };
  } else {
    delete axios.defaults.headers.Authorization;
  }
};

export default setAuthHeader;
