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
          `${process.env.NEXT_PUBLIC_BASE_URL}/sample/user`
        );
        const fetchedData: ProfileData = await response.json();

        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching Profile data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading };
};

export default useProfileData;
