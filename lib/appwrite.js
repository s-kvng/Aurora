import { Client, Account, ID } from "react-native-appwrite";

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

export const createUser = () => {
  // Register User
  account.create(ID.unique(), "me@example.com", "password", "Nathan Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
