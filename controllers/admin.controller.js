import Project from "../models/Project.js";
import Service from "../models/Service.js";
import Contact from "../models/Contact.js";

// Render Dashboard
export const getDashboard = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    const projects = await Project.find().sort({ createdAt: -1 });
    const services = await Service.find().sort({ createdAt: -1 });

    res.render("admin/dashboard", {
      title: "Admin Dashboard",
      page: "admin",
      messages,
      projects,
      services,
      successMessage: req.query.success || null
    });
  } catch (error) {
    console.error("Admin Dashboard error:", error);
    res.status(500).send("Admin Server Error");
  }
};

// Add Project
export const addProject = async (req, res) => {
  try {
    const { title, description, imageUrl, category, featured } = req.body;
    const isFeatured = featured === "true";

    const newProject = new Project({
      title,
      description,
      imageUrl,
      category,
      featured: isFeatured
    });

    await newProject.save();
    res.redirect("/admin?success=Project added successfully!#projects");
  } catch (error) {
    console.error("Add Project error:", error);
    res.status(500).send("Error adding project");
  }
};

// Delete Project
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await Project.findByIdAndDelete(id);
    res.redirect("/admin?success=Project deleted successfully!#projects");
  } catch (error) {
    console.error("Delete Project error:", error);
    res.status(500).send("Error deleting project");
  }
};

// Add Service
export const addService = async (req, res) => {
  try {
    const { title, description, imageUrl, price, features } = req.body;
    // Split features by comma and trim whitespace
    const featuresArray = features ? features.split(",").map(f => f.trim()).filter(f => f !== "") : [];

    const newService = new Service({
      title,
      description,
      imageUrl,
      price,
      features: featuresArray
    });

    await newService.save();
    res.redirect("/admin?success=Service added successfully!#services");
  } catch (error) {
    console.error("Add Service error:", error);
    res.status(500).send("Error adding service");
  }
};

// Delete Service
export const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    await Service.findByIdAndDelete(id);
    res.redirect("/admin?success=Service deleted successfully!#services");
  } catch (error) {
    console.error("Delete Service error:", error);
    res.status(500).send("Error deleting service");
  }
};

// Delete Message
export const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;
    await Contact.findByIdAndDelete(id);
    res.redirect("/admin?success=Inquiry deleted successfully!#messages");
  } catch (error) {
    console.error("Delete Message error:", error);
    res.status(500).send("Error deleting message");
  }
};
