import axios from "axios";

export default {
  getAll: async () => {
    let response = await axios.get(`/api/status`);
    return response.data || [];
  },
};
