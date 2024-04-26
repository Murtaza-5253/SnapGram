import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  projectId: "662a2fbe82e5566cbe81",
  url: "https://cloud.appwrite.io/v1",
  databaseId: "662b8acef1250ea6f9ae",
  storageId: "662b8a97609ddbf017bc",
  userCollectionId: "662b93895f75cec1c4ea",
  postCollectionId: "662b93909abecb2d6f68",
  savesCollectionId: "662b939560bedd9d7ee8",
};

export const client = new Client();
client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
