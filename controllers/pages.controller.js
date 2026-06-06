import Project from "../models/Project.js";
import Service from "../models/Service.js";

export const getHome = async (req, res) => {
  try {
    const projects = await Project.find({ featured: true }).limit(3);
    const services = await Service.find().limit(4);

    console.log("Projects:", projects.length);
    console.log("Services:", services.length);

    res.render("index", {
      title: "Crafting Digital Excellence",
      page: "home",
      projects,
      services
    });
  } catch (error) {
    console.error("Home controller error:", error);
    res.status(500).send("Server Error");
  }
};

export const getPortfolio = async (req, res) => {
  try {
    const projects = await Project.find();

    res.render("portfolio", {
      title: "Portfolio",
      page: "portfolio",
      projects
    });
  } catch (error) {
    console.error("Portfolio controller error:", error);
    res.status(500).send("Server Error");
  }
};

export const getServices = async (req, res) => {
  try {
    const services = await Service.find();

    res.render("services", {
      title: "Services",
      page: "services",
      services
    });
  } catch (error) {
    console.error("Services controller error:", error);
    res.status(500).send("Server Error");
  }
};

export const getAbout = (req, res) => {
  res.render("about", {
    title: "About Us",
    page: "about"
  });
};

export const getContact = (req, res) => {
  res.render("contact", {
    title: "Contact Us",
    page: "contact",
    successMessage: null,
    errorMessage: null
  });
};