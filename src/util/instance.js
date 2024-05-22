import axios from "axios";

/**
 * Axios 인스턴스는 기본 URL이 설정된 axios 요청을 생성합니다.
 *
 * @example
 * import { instance } from './path/to/axiosInstance';
 * 
 * instance.get('/endpoint')
 *   .then(response => {
 *     console.log(response.data);
 *   })
 *   .catch(error => {
 *     console.error('There was an error!', error);
 *   });
 *
 * @constant
 * @type {AxiosInstance}
 * @default
 */
export const instance = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api/",
});
