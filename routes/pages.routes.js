import express from "express";
const router = express.Router();

import {
  getHome,
  getPortfolio,
  getServices,
  getAbout,
  getContact
} from "../controllers/pages.controller.js";

import { handleContactSubmit } from "../controllers/contact.controller.js";

router.get("/", getHome);
router.get("/portfolio", getPortfolio);
router.get("/services", getServices);
router.get("/about", getAbout);
router.get("/contact", getContact);

router.post("/contact", handleContactSubmit);

export default router;
