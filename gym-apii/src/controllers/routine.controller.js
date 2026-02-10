import RoutineModel from "../models/routine.model.js";

class routineController {
  constructor() {}

  async create(req, res) {
    try {
      const routine = await RoutineModel.create(req.body);
      res.status(201).json(routine);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params; 
      const routine = await RoutineModel.getById(id);
      if (!routine) {
        return res.status(404).json({ error: "Routine not found" });
      }
      res.status(200).json(routine);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  async getAll(req, res) {
    try {
      const routine = await RoutineModel.getAll();
      res.status(200).json(routine);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const routine = await RoutineModel.update(id, req.body);
      res.status(200).json(routine);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const routine = await RoutineModel.delete(id);
      res.status(206).json(routine);
    } catch (e) {
      res.status(500).send(e);
    }
  }
}

export default new routineController();