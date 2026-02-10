import dbClient from "../config/dbClient.js";
import { ObjectId } from "mongodb";

class RoutineModel {

   async create(routineData) {
    const routine = dbClient.db.collection("routines");
    return await routine.insertOne(routineData);
  }

  async getAll() {
    const routine = dbClient.db.collection("routines");
    return await routine.find().toArray();
  }

  async getById(id) {
    const routine = dbClient.db.collection("routines");
    return await routine.findOne({ _id: new ObjectId(id)});
  }

  async update(id, routineData) {
    const routine = dbClient.db.collection("routines");
    return await routine.updateOne({ _id: new ObjectId(id) }, { $set: routineData });
  }

  async delete(id) {
    const routine = dbClient.db.collection("routines");
    return await routine.deleteOne({ _id: new ObjectId(id) });
  } 

 
}

export default new RoutineModel();