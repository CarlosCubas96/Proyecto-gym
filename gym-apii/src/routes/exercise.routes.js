import express from "express";
import exerciseController from "../controllers/exercise.controller.js";

const router = express.Router();

router.post("/", exerciseController.create);
router.get("/", exerciseController.getAll);
router.get("/:id", exerciseController.getById);
router.put("/:id", exerciseController.update);
router.delete("/:id", exerciseController.delete);

export default router;
