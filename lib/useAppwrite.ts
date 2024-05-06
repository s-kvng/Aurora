import { useState, useEffect } from "react";
import { Alert } from "react-native";

interface AppwriteVideo {
  // System-generated fields
  "$collectionId": string;
  "$createdAt": string;
  "$databaseId": string;
  "$id": string;
  "$permissions": string[]; // Assuming it's an array of strings
  "$updatedAt": string;

  // Video-specific fields
  creator: Creator;
  prompt: string;
  thumbnail: string;
  title: string;
  video: string;
}

interface Creator {
  "$collectionId": string;
  "$createdAt": string;
  "$databaseId": string;
  "$id": string;
  "$permissions": string[]; // Assuming it's an array of strings
  "$updatedAt": string;

  accountId?: string; // Optional field
  avatar: string;
  email: string;
  username: string;
}

const useAppwrite = (fn : () => Promise<AppwriteVideo[]>) => {
  const [data, setData] = useState<AppwriteVideo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  //   fetch post function
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fn();
      setData(response);
    } catch (error) {
      Alert.alert("Error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => fetchData();

  return { data, refetch, isLoading };
};

export default useAppwrite;
