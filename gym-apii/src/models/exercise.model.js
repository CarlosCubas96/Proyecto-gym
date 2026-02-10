import dbClient from "../config/dbClient.js";
import { ObjectId } from "mongodb";

class ExerciseModel {

   async create(exerciseData) {
    const exercise = dbClient.db.collection("exercises");
    return await exercise.insertOne(exerciseData);
  }

  async getAll() {
    const exercise = dbClient.db.collection("exercises");
    return await exercise.find().toArray();
  }

  async getById(id) {
    const exercise = dbClient.db.collection("exercises");
    return await exercise.findOne({ _id: new ObjectId(id)});
  }

  async update(id, exerciseData) {
    const exercise = dbClient.db.collection("exercises");
    return await exercise.updateOne({ _id: new ObjectId(id) }, { $set: exerciseData });
  }

  async delete(id) {
    const exercise = dbClient.db.collection("exercises");
    return await exercise.deleteOne({ _id: new ObjectId(id) });
  } 

 
}

export default new ExerciseModel();