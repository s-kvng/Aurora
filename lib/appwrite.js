import { Client, Account, ID, Avatars, Databases } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.nea.aurora",
  projectId: "661cb8fe265a4272e1cb",
  databaseId: "661cbd06cb09c69bb96f",
  usersCollectionId: "661cbdd178f40b4b0ad6",
  videoCollectionId: "661cbe00283fec91c9e5",
  storageId: "661cc12584cd51aefee5",
};

// Init your react-native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);
//
const avatars = new Avatars(client);
const databases = new Databases(client);

// Register User
export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username);
    await signIn(email, password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.usersCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        username,
        email,
        avatar: avatarUrl,
      }
    );

    console.log("logging user data -> ", newUser);
    return newUser;
  } catch (error) {
    console.log("create user error -> ", error);
  }
};

export async function signIn(email, password) {
  try {
    const user = account.createEmailSession(email, password);
  } catch (error) {
    console.log("sign in error-> ", error);
  }
}
