import { User } from "@/types/user";
import apiInstance from "@/shared/model/api/axios";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

const useGetUserData = () => {
  const [userData, setUserData] = useState<User>();
  const [error, setError] = useState<string | null>(null);

  const getUserData = async () => {
    try {
      const res = await apiInstance.get("/users/1");
      const user: User = res.data.data[0];
      setUserData(user);
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(err.response?.data.details || err.message);
      }
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return { userData, error };
};

export default useGetUserData;
