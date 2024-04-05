import axios from 'axios';

const BASE_URL = 'https://bootcamp-api.codeit.kr/';

async function fetchData(url, method = 'GET', body = null) {
  try {
    const response = await axios({
      url: `${BASE_URL}${url}`,
      method,
      data: body,
    });
    return { data: response.data, error: null };
  } catch (error) {
    console.error(error);
    const errorMessage = error.response ? error.response.data : error.message;
    return { data: null, error: errorMessage };
  }
}

export default fetchData;
