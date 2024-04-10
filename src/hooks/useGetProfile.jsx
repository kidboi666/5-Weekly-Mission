import { useState, useEffect } from "react";
import { getRequest } from "../api";

export const useGetProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async function () {
      const userData = await getRequest("api/users/1", null);
      setUser(() => {
        return userData;
      });
    })();
  }, []);

  return [user];
};
