import WorkoutModel from "../models/workout.model.js";

class workoutController {
  constructor() {}

  async create(req, res) {
    try {
      const workout = await WorkoutModel.create(req.body);
      res.status(201).json(workout);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params; 
      const workout = await WorkoutModel.getById(id);
      if (!workout) {
        return res.status(404).json({ error: "Workout not found" });
      }
      res.status(200).json(workout);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  async getAll(req, res) {
    try {
      const workout = await WorkoutModel.getAll();
      res.status(200).json(workout);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const workout = await WorkoutModel.update(id, req.body);
      res.status(200).json(workout);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const workout = await WorkoutModel.delete(id);
      res.status(206).json(workout);
    } catch (e) {
      res.status(500).send(e);
    }
  }
}

export default new workoutController();
