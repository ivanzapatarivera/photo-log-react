import axios from "axios";

export default {
  getAll: async () => {
    let response = await axios.get(`/api/pastries`);
    return response.data || [];
  }
};
