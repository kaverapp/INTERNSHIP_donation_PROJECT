const conf={
    appwrite_URL:String(import.meta.env.VITE_APP_APPWRITE_URL),
    appwriteProject_ID:String(import.meta.env.VITE_APPRITE_PROJECT_ID),
    appwriteDatabase_ID:String(import.meta.env.VITE_APPRITE_DATABASE_ID),
    appwriteUSERcollection_ID:String(import.meta.env.VITE_APPRITE_USER_COLLECTION_ID),
    appwriteBUCKET_ID:String(import.meta.env.VITE_APPRITE_BUCKET_ID),
    appwriteCAMPAIGNcollection_ID:String(import.meta.env.VITE_APPRITE_CAMPAIGN_COLLECTION_ID),
}

export default conf