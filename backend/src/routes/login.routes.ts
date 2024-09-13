import { Router } from "express";
import container from "../container/container.config";
import LoginController from "../controllers/login.controller";

const loginRouter: Router = Router();
const loginController: LoginController = container.resolve<LoginController>("LoginController");

loginRouter.post("/signin", (req, res) => loginController.login(req, res));
loginRouter.post("/signout", (req, res) => loginController.logout(req, res));
loginRouter.post("/verify", (req, res) => loginController.verifyToken(req, res));

export default loginRouter;