import ExerciseModel from "../models/exercise.model.js";

class exerciseController {
  constructor() {}

  async create(req, res) {
    try {
      const exercise = await ExerciseModel.create(req.body);
      res.status(201).json(exercise);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params; 
      const exercise = await ExerciseModel.getById(id);
      if (!exercise) {
        return res.status(404).json({ error: "Exercise not found" });
      }
      res.status(200).json(exercise);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  async getAll(req, res) {
    try {
      const exercise = await ExerciseModel.getAll();
      res.status(200).json(exercise);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const exercise = await ExerciseModel.update(id, req.body);
      res.status(200).json(exercise);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const exercise = await ExerciseModel.delete(id);
      res.status(206).json(exercise);
    } catch (e) {
      res.status(500).send(e);
    }
  }
}

export default new exerciseController();
