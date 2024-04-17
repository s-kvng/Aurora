import {
  Client,
  Account,
  ID,
  Avatars,
  Databases,
  Query,
} from "react-native-appwrite";

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

export const signIn = async (email, password) => {
  try {
    const user = account.createEmailSession(email, password);
  } catch (error) {
    console.log("sign in error-> ", error);
  }
};

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get(); // get the current account that is in session(currently logged in)
    console.log("trying to find  a session ", currentAccount);
    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      config.databaseId,
      config.usersCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    console.log("trying to find  the document of user -> ", currentUser);
    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
  }
};
