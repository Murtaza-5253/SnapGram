import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  projectId: "662a2fbe82e5566cbe81",
  url: "https://cloud.appwrite.io/v1",
  databaseId: "662b8acef1250ea6f9ae",
  storageId: "662b8a97609ddbf017bc",
  userCollectionId: "662b93895f75cec1c4ea",
  postCollectionId: "662b93909abecb2d6f68",
  savesCollectionId: "662b939560bedd9d7ee8",
  functionApi:'338fbea2b16bee37edfe4522f5dcb6ec6ff4ecc8d4b98b81448b07f72ef290520d23d21927eceed803d073a1e2f867341f26ea09dd44c26ea24504365d683684c267337de4884e5a7cffc120457eaaa8ea5ee718432ba76a266b3bcd8179e400736b151c63c112d619f9ee0d7d3504b2d2ca0d265b7f97e776abfbcbe72b64c3',
};

export const client = new Client();
client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
