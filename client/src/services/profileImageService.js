import axios from "axios";

export default {
  getAll: async () => {
    let response = await axios.get(`/api/loggedprofilepicture`);
    let lastIndex = response.data.length - 1;
    let lastItem = response.data[lastIndex]
    return lastItem || [];
  }
};
