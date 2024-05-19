import { SignInFormInputs } from "../widgets/signIn/signInForm";
import axios from "./axiosInstance";
import camelcaseKeys from "camelcase-keys";

export const fetchData = async () => {
  try {
    const response = await axios.get(`/api/sample/folder`);
    const { data } = response;
    const { folder } = data;
    const { links } = folder;
    return { folderData: folder, cardListData: links };
  } catch (e) {
    if (e instanceof Error) {
      alert(e.message);
    }
  }
};

export const loginFetchData = async () => {
  try {
    const response = await axios.get(`/api/sample/user`);
    const { data } = response;

    return data;
  } catch (e) {
    if (e instanceof Error) {
      alert(e.message);
    }
  }
};

export const tabDataList = async () => {
  try {
    const response = await axios.get(`/api/users/1/folders`);
    if (response.data) {
      response.data = camelcaseKeys(response.data, { deep: true });
    }

    const { data } = response;

    return data;
  } catch (e) {
    if (e instanceof Error) {
      alert(e.message);
    }
  }
};

export const userFoldersData = async () => {
  try {
    const response = await axios.get(`/api/users/1/links`);
    if (response.data) {
      response.data = camelcaseKeys(response.data, { deep: true });
    }
    const { data } = response;

    return data;
  } catch (e) {
    if (e instanceof Error) {
      alert(e.message);
    }
  }
};

export const userFoldersTapData = async (id: number) => {
  try {
    const response = await axios.get(`/api/users/1/links?folderId=${id}`);
    if (response.data) {
      response.data = camelcaseKeys(response.data, { deep: true });
    }
    const { data } = response;

    return data;
  } catch (e) {
    if (e instanceof Error) {
      alert(e.message);
    }
  }
};

export const userSignInData = async (signInData: SignInFormInputs) => {
  try {
    const response = await axios.post(`/api/sign-in`, signInData);

    const { data } = response;

    return data;
  } catch (e) {
    if (e instanceof Error) {
      alert(e.message);
    }
  }
};

export const checkEmailAvailability = async (email: string) => {
  try {
    const response = await axios.post(`/api/check-email`, { email });

    return response.data.data.isUsableNickname;
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    }
  }
};
