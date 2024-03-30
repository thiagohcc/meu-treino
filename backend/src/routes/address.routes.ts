import { Router } from "express";

import AddressController from "../controllers/address.controller";

const addressRouter = Router();
const addressController = new AddressController();

addressRouter.get("/", (req, res) => addressController.getAll(req, res));
addressRouter.get("/:id", (req, res) => addressController.getById(req, res));
addressRouter.post("/", (req, res) => addressController.post(req, res));
addressRouter.put("/:id", (req, res) => addressController.put(req, res));
addressRouter.delete("/:id", (req, res) => addressController.delete(req, res));
addressRouter.patch("/:id", (req, res) => addressController.patch(req, res));

export default addressRouter;