import express from "express";
import routineController from "../controllers/routine.controller.js";

const router = express.Router();

router.post("/", routineController.create);
router.get("/", routineController.getAll);
router.get("/:id", routineController.getById);
router.put("/:id", routineController.update);
router.delete("/:id", routineController.delete);

export default router;
