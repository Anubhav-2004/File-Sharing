import mongoose from 'mongoose';


const DBConnection = async () => {
    const MONODB_URI = `mongodb://user:anubhav04@ac-3rlcm2b-shard-00-00.olvsaer.mongodb.net:27017,ac-3rlcm2b-shard-00-01.olvsaer.mongodb.net:27017,ac-3rlcm2b-shard-00-02.olvsaer.mongodb.net:27017/?ssl=true&replicaSet=atlas-8attjp-shard-0&authSource=admin&retryWrites=true&w=majority&appName=file-sharing`;
    try{
       await mongoose.connect(MONODB_URI, { useNewUrlParser: true });
        console.log('Database Connected Sucessfully');
    }catch(error)
    {
        console.error('Error While Connection With the Database'.error.message);
    }
}

export default DBConnection;