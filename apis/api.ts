import axios from 'axios';

const BASIC_URL = 'https://bootcamp-api.codeit.kr/api';

export async function getUser() {
  const response = await axios.get(`${BASIC_URL}/users/1`);
  if (response.status < 200 || response.status >= 300) {
    throw new Error('사용자 데이터를 불러오는데 실패했습니다.');
  }
  const result = response.data.data[0];
  return result;
}

export async function getUserData() {
  const response = await axios.get(`${BASIC_URL}/users`);
  if (response.status < 200 || response.status >= 300) {
    throw new Error('사용자 데이터를 불러오는데 실패했습니다.');
  }
  const result = response.data.data[0];
  return result;
}

export async function postSignUp(id: string, pw: string) {
  const response = await axios.post(`${BASIC_URL}/sign-up`, {
    email: id,
    password: pw,
  });
  if (response.status < 200 || response.status >= 300) {
    throw new Error('회원가입에 실패했습니다.');
  }
  const result = response.data.data;
  return result;
}

export async function postSignIn(id: string, pw: string) {
  const response = await axios.post(`${BASIC_URL}/sign-up`, {
    email: id,
    password: pw,
  });
  if (response.status < 200 || response.status >= 300) {
    throw new Error('회원가입에 실패했습니다.');
  }
  const result = response.data.data;
  return result;
}

export async function getFolders(folderId: number) {
  const queryParam = folderId === undefined ? '' : `?folderId=${folderId}`;
  const response = await axios.get(`${BASIC_URL}/users/1/folders${queryParam}`);
  if (response.status < 200 || response.status >= 300) {
    throw new Error('사용자 데이터를 불러오는데 실패했습니다.');
  }
  const result = response.data.data;
  return result;
}

export async function getLinks(folderId?: number) {
  const queryParam = folderId === 0 ? '' : `?folderId=${folderId}`;
  const response = await axios.get(`${BASIC_URL}/users/1/links${queryParam}`);
  if (response.status < 200 || response.status >= 300) {
    throw new Error('사용자 데이터를 불러오는데 실패했습니다.');
  }
  const data = response.data.data;
  return data;
}
