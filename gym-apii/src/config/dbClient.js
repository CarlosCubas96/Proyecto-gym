// src/config/dbClient.js
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

class dbClient {
  constructor() {
    const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}?appName=${process.env.MONGO_APP_NAME}`;
    this.client = new MongoClient(uri);
    this.connectBD();
  }

  async connectBD() {
    try {
      await this.client.connect();
      this.db = this.client.db("gymDB");

      console.log("Connected to dddMongoDB");
    } catch (e) {
      console.error("Error connecting to MongoDB:", e);
    }
  }
}

export default new dbClient;
