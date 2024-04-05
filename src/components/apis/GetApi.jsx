import axios from 'axios';

const BASE_URL = 'https://bootcamp-api.codeit.kr/';

async function fetchData(url, method = 'GET', body = null) {
  try {
    let response;
    switch (method) {
      case 'GET':
        response = await axios.get(`${BASE_URL}${url}`);
        break;
      case 'POST':
        response = await axios.post(`${BASE_URL}${url}`, body);
        break;
      case 'PUT':
        response = await axios.put(`${BASE_URL}${url}`, body);
        break;
      case 'DELETE':
        response = await axios.delete(`${BASE_URL}${url}`);
        break;
      case 'PATCH':
        response = await axios.patch(`${BASE_URL}${url}`, body);
        break;
      default:
        throw new Error(`Unsupported method: ${method}`);
    }
    return { data: response.data, error: null };
  } catch (error) {
    console.error(error);
    return { data: null, error: error.message };
  }
}

export default fetchData;
