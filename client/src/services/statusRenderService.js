import axios from "axios";

export default {
  getAll: async () => {
    let response = await axios.get(`/api/status`);
    let lastIndex = response.data.length - 1;
    let lastItem = response.data[lastIndex];
    return lastItem || [];
  },
};
