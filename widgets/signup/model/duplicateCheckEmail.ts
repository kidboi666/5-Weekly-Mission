import apiInstance from "@/shared/model/api/axios";

export const duplicateCheckEmail = async (email: string) => {
  const res = await apiInstance.post("/check-email", { email });
  if (!res) return false;
  return true;
};
