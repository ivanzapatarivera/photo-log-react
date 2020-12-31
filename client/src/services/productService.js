import axios from 'axios';

export default {
  getAll: async () => {
    let response = await axios.get(`/api/product`);
    return response.data || [];
  }
}