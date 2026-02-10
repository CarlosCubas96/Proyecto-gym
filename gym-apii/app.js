import express from "express";
import exerciseRoutes from "./src/routes/exercise.routes.js";
import routineRoutes from "./src/routes/routine.routes.js";
import workoutRoutes from "./src/routes/workout.routes.js";
import cors from 'cors';


import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cors());
app.use("/exercise", exerciseRoutes);
app.use("/routine", routineRoutes);
app.use("/workout", workoutRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});
