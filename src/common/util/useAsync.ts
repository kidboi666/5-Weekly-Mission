import { useState } from "react";
import { useEffectOnce } from "./useEffectOnce";
import { DataTypes, FolderResponse } from "@/common/types/data-access-types";
import { AxiosError, AxiosResponse } from "axios";

export const useAsync = (
  asyncFunction: () => Promise<AxiosResponse<FolderResponse, AxiosError>>
) => {
  const [loading, setLoading] = useState<boolean>(false);
  // !!! 에러 객체의 경우 타입을 어떻게 적어줘야 할까요?
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<DataTypes | null>(null);

  // !!! 리스폰스에 따라 try-catch 문에서 반환값이 달라지는데 Promise<T> T 매개변수는 뭐라 지정해줘야 할까요?
  const execute = async (): Promise<any> => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const response = await asyncFunction();
      setData(response?.data);
      return response;
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffectOnce(execute);

  return { execute, loading, error, data };
};
