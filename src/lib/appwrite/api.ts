import { INewPost, INewUser } from "@/types"
import { account, appwriteConfig, avatars, databases, storage } from "./config"
import { ID, Query } from "appwrite"


export async function createUserAccount(user:INewUser){
    try {
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name,
        );

        if(!newAccount)throw Error("")

        const avatarUrl = avatars.getInitials(user.name);
        const newUser = await saveUserToDB({
            accountId: newAccount.$id,
            email: newAccount.email,
            name: newAccount.name,
            imageUrl: avatarUrl,
            username: user.username,
        })    
        
        
        return newUser
    } 
    catch (e) {
        console.error("error"+e)
        return e
    }
}

export async function signInAccount(user:{
    email:string, password:string;
}){
    try {
        const session = await account.createEmailPasswordSession(user.email, user.password);
        return session
    } 
    catch (e) {
        console.log(e)
    }
}

export async function signOutAccount() {
    try{
        const session = account.deleteSession("current")
        return session
    }   catch (e){
        console.log(e)
    } 
}

export async function saveUserToDB(user:{
    accountId:string,
    email:string,
    name:string,
    imageUrl:URL,
    username?:string,
}) {
    try {
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            user,
        )
        return newUser
    }catch (error){
        console.error("error"+error);
    }
}

export async function getCurrentUser() {
    try{
        const currentAccount = await account.get();
        if(!currentAccount)throw Error;
        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal('accountId',currentAccount.$id)],
        )
        if(!currentUser)throw Error;
        return currentUser.documents[0];
    } 
    catch (e){
        console.log(e)
    }
}

export async function createPost(post:INewPost) {
    try {
    
        //upload image to storage
        const uploadedFile = await uploadFile(post.file[0]);
        if(!uploadedFile)throw Error;

        //get file url
        const fileUrl = await getFilePreview(uploadedFile.$id);
      
        if(!fileUrl){
            deleteFile(uploadedFile.$id);
            throw Error
        }

        //convert tags in an array
        const tags = post.tags?.replace(/ /g,'').split(',') || []
     
        //save post to database
        const newPost = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.postCollectionId,
            ID.unique(),
            {
                creator:post.userId,
                caption:post.caption,
                imageUrl:fileUrl,
                imageId:uploadedFile.$id,
                location:post.location,
                tags:tags,
            }
        )
 
        if(!newPost){
            await deleteFile(uploadedFile.$id);
            throw Error
        }
    } catch (error) {
        console.log(error)
    }
}
export async function uploadFile(file:File) {

    try {
       const uploadedFile = await storage.createFile(
        appwriteConfig.storageId,
        ID.unique(),
        file,
       ) 
       return uploadedFile;
    } catch (error) {
        console.log(error);
    }
    
}

export async function getFilePreview(fileID:string) {
    try {
        const fileUrl =  storage.getFilePreview(
            appwriteConfig.storageId,
            fileID,
            2000,
            2000,
            "top",
            100,
        );
        return fileUrl;
    } catch (error) {
        console.log(error)
    }
    
}
export async function deleteFile(fileId:string) {
    try {
        await storage.deleteFile(appwriteConfig.storageId,fileId)
        return {status:'ok'}
    } catch (error) {
        console.log(error)
    }
}