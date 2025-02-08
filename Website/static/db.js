import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const database = process.env.DATABASE;
const connectionString = process.env.CONNECTION_STRING;

class MongoDBClient {
    constructor(link = connectionString, dbName = database) {
        this.client = new MongoClient(link);
        this.db = this.client.db(dbName);
    }

    getCollection(name) {
        return this.db.collection(name);
    }

    async connect() {
        try {
            await this.client.connect();
            console.log("Connected to MongoDB!");
        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
        }
    }
}

const mongo = new MongoDBClient();
export default mongo; 
