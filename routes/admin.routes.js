import express from "express";
const router = express.Router();

import {
  getDashboard,
  addProject,
  deleteProject,
  addService,
  deleteService,
  deleteMessage
} from "../controllers/admin.controller.js";

router.get("/", getDashboard);

router.post("/projects/add", addProject);
router.get("/projects/delete/:id", deleteProject);

router.post("/services/add", addService);
router.get("/services/delete/:id", deleteService);

router.get("/messages/delete/:id", deleteMessage);

export default router;
