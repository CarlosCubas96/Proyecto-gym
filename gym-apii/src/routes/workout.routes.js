import express from "express";
import workoutController from "../controllers/workout.controller.js";

const router = express.Router();

router.post("/", workoutController.create);
router.get("/", workoutController.getAll);
router.get("/:id", workoutController.getById);
router.put("/:id", workoutController.update);
router.delete("/:id", workoutController.delete);

export default router;
