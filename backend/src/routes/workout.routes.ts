import { Router } from "express";
import WorkoutController from "../controllers/workout.controller";

const workoutRouter: Router = Router();
const workoutController: WorkoutController = new WorkoutController();

workoutRouter.get("/", (req, res) => workoutController.getAll(req, res));
workoutRouter.get("/:id", (req, res) => workoutController.getById(req, res));
workoutRouter.get("/workoutsheet/:workoutsheetId", (req, res) => workoutController.getByWorkoutsheetId(req, res));
workoutRouter.post("/", (req, res) => workoutController.post(req, res));
workoutRouter.put("/:id", (req, res) => workoutController.put(req, res));
workoutRouter.delete("/:id", (req, res) => workoutController.delete(req, res));
workoutRouter.patch("/:id", (req, res) => workoutController.patch(req, res));

export default workoutRouter;