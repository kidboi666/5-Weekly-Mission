import { useState, useEffect } from "react";

interface ProfileData {
  email: string;
  id: number;
  name: string;
  profileImageSource: string;
}

const useProfileData = (): {
  data: ProfileData | null;
  isLoading: boolean;
} => {
  const [data, setData] = useState<ProfileData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/sample/user`
        );
        const fetchedData: ProfileData = await response.json();

        setData(fetchedData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching Profile data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading };
};

export default useProfileData;
