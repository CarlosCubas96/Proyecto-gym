import dbClient from "../config/dbClient.js";
import { ObjectId } from "mongodb";

class WorkoutModel {

   async create(workoutData) {
    const workout = dbClient.db.collection("workouts");
    return await workout.insertOne(workoutData);
  }

  async getAll() {
    const workout = dbClient.db.collection("workouts");
    return await workout.find().toArray();
  }

  async getById(id) {
    const workout = dbClient.db.collection("workouts");
    return await workout.findOne({ _id: new ObjectId(id)});
  }

  async update(id, workoutData) {
    const workout = dbClient.db.collection("workouts");
    return await workout.updateOne({ _id: new ObjectId(id) }, { $set: workoutData });
  }

  async delete(id) {
    const workout = dbClient.db.collection("workouts");
    return await workout.deleteOne({ _id: new ObjectId(id) });
  } 

 
}

export default new WorkoutModel();