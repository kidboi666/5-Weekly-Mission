import { useRouter } from "next/router";
import { useEffect } from "react";

export const useCheckLogin = () => {
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      router.push("/folder");
    }
  });

  return;
};
