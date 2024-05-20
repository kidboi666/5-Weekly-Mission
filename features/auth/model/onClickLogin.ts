import apiInstance from "@/shared/model/api/axios";
import { AxiosError } from "axios";
import { FormEvent, SyntheticEvent } from "react";

export const onClickLogin = async (data: {
  email: string;
  password: string;
}) => {
  try {
    const res = await apiInstance.post("/sign-in", data);
    const accessToken = res.data.data.accessToken;
    localStorage.setItem("accessToken", accessToken);
    window.location.href = "folder";
    return;
  } catch (err) {
    if (err instanceof AxiosError) {
      handleLoginError(err);
    }
  }

  return;
};

const handleLoginError = (err: AxiosError) => {
  const status = err.response?.status;

  switch (status) {
    case 400: {
      alert("이메일을 확인해 주세요.");
      alert("비밀번호를 확인해 주세요.");
      break;
    }

    case 404: {
      alert("사이트 패치중입니다.");
      break;
    }
  }
};
