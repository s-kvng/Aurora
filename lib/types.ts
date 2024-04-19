
 export interface AppwriteVideo {
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
  
  export interface Creator {
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