import axios from 'axios'

const baseURL = 'https://bootcamp-api.codeit.kr/api'

export const axiosInstance = axios.create({
  baseURL: baseURL,
})

const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data)

export default fetcher
