import axios from "axios";

export default {
  getAll: async () => {
    let response = await axios.get(`/image`);
    let lastIndex = response.data.length - 1;
    let lastItem = response.data[lastIndex]
    console.log(lastIndex)
    console.log(response.data[lastIndex]);
    return lastItem || [];
  },
};
