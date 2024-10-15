import conf from "../conf/conf.js";

import { Client, Account,ID,Databases,Storage,Query} from 'appwrite';


export class Service{
    client=new Client();
    databases;
    bucket;


    constructor(){
        this.client
        .setEndpoint(conf.appwrite_URL)
        .setProject(conf.appwriteProject_ID);
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);
    }

    async createCampaign({title,slug,description,targetAmount,organizerID,startDate,endDate,status,userID,featuredIMG}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabase_ID,
                conf.appwriteCAMPAIGNcollection_ID,
                slug,
                {
                    title,
                    slug,
                    description,
                    targetAmount,
                    organizerID,
                    startDate,
                    endDate,
                    status,
                    userID,
                    featuredIMG
                }
            )
        } catch (error) {
            throw error
        }
    };

    async updateCampaign(slug,{description,targetAmount,organizerID,endDate,status,userID,featuredIMG}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabase_ID,
                conf.appwriteCAMPAIGNcollection_ID,
                slug,
                {
                    title,
                    description,
                    targetAmount,
                    endDate,
                    status,
                    userID,
                    featuredIMG
                }
            )
        } catch (error) {
            throw error
        }
    }

    async deleteCampaign(campaignID){
        try {
             await this.databases.deleteDocument(
                conf.appwriteDatabase_ID,
                conf.appwriteCAMPAIGNcollection_ID,
                campaignID
            )
            return true;
        } catch (error) {
            throw error;
            
        }
    }

    async getCampaign(slug){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabase_ID,
                conf.appwriteCAMPAIGNcollection_ID,
                slug   // fetching document using slug as ID
            )
        } catch (error) {
            throw error;
        }
    }

    async getCampaigns(queries=[Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
            conf.appwriteDatabase_ID,
            conf.appwriteCAMPAIGNcollection_ID,
            queries,
            )
        } catch (error) {
            throw error;
        }
    }

    //file uploading service
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBUCKET_ID,
                ID.unique(),
                file,
            )
        } catch (error) {
            throw error
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBUCKET_ID,
                fileId
            )
            return true
        } catch (error) {
            throw error
        }
    }

    async getfilePreview(fileId){
        try {
            return await this.bucket.getFilePreview(
                conf.appwriteBUCKET_ID,
                fileId
            )
        } catch (error) {
            throw error
        }
    }
}
const service=new Service()


export default service