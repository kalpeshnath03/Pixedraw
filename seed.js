import mongoose from "mongoose";
import dotenv from "dotenv";
import Project from "./models/Project.js";
import Service from "./models/Service.js";

dotenv.config();

const projects = [
  {
    title: "poonam Mehendi art",
    description: "Mehendi designs branding.",
    imageUrl: "images/1000215783.jpg",
    category: "Branding",
    featured: true
  },
  {
    title: "Hanuman- tour",
    description: "Provide tour services branding.",
    imageUrl: "images/1000215784.jpg",
    category: "Logo Design",
    featured: true
  },
  {
    title: "Vishva-Karma",
    description: "Auto parts identity and logo.",
    imageUrl: "images/1000215785.jpg",
    category: "Branding",
    featured: true
  },
  {
    title: "Mimis - Momole",
    description: "The Way of life branding.",
    imageUrl: "images/1000215786.jpg",
    category: "Branding",
    featured: false
  },
  {
    title: "Education&cheritable - Trust",
    description: "Non-profit organization branding.",
    imageUrl: "images/1000215787.jpg",
    category: "Branding",
    featured: false
  },
  {
    title: "Hari om jewellery",
    description: "Custom jewelry designs and identity.",
    imageUrl: "images/1000215788.jpg",
    category: "Branding",
    featured: false
  },
  {
    title: "Saiar- Hospitality",
    description: "Hospitality services branding.",
    imageUrl: "images/1000215790.jpg",
    category: "Branding",
    featured: false
  },
  {
    title: "Hari om jewellery (Classic)",
    description: "Custom classic jewelry designs.",
    imageUrl: "images/1000215791.jpg",
    category: "Branding",
    featured: false
  },
  {
    title: "Om resturant",
    description: "Restaurant branding and identity.",
    imageUrl: "images/1000215792.jpg",
    category: "Branding",
    featured: false
  }
];

const services = [
  {
    title: "Logo Design",
    description: "Your logo is the face of your brand. We create memorable, timeless logo designs that capture your brand's essence and stand out in the market.",
    imageUrl: "images/logo.jpg",
    price: "Starting at ₹600",
    features: [
      "Concept development and sketches",
      "Multiple design iterations",
      "Vector files (AI, EPS, SVG)",
      "Usage guidelines",
      "Unlimited revisions during project"
    ]
  },
  {
    title: "Web Design",
    description: "Modern, responsive web designs that engage your audience and drive conversions. We create websites that look stunning on all devices.",
    imageUrl: "images/image.png",
    price: "Starting at ₹1,500",
    features: [
      "Responsive design for mobile, tablet, desktop",
      "User experience (UX) optimization",
      "Fast loading times and SEO-friendly",
      "Clean, maintainable code",
      "Unlimited revisions during project"
    ]
  },
  {
    title: "UI/UX Design",
    description: "We create intuitive, user-centered interfaces that make your digital products a pleasure to use.",
    imageUrl: "images/image copy.png",
    price: "Starting at ₹1,200",
    features: [
      "User research and persona development",
      "Wireframing and prototyping",
      "High-fidelity mockups",
      "Usability testing and iterations",
      "Design system documentation"
    ]
  },
  {
    title: "Digital Marketing",
    description: "Strategic online marketing campaigns designed to boost your visibility and connect with your target audience.",
    imageUrl: "images/image copy 2.png",
    price: "Starting at ₹500/month",
    features: [
      "Social media graphics and content",
      "Email marketing designs",
      "Digital advertisements",
      "Brand consistency across platforms",
      "Performance tracking and optimization"
    ]
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB for seeding...");

    // Clear existing data
    await Project.deleteMany({});
    await Service.deleteMany({});
    console.log("Cleared existing projects and services.");

    // Insert seeds
    await Project.insertMany(projects);
    await Service.insertMany(services);
    console.log("Seeded database with initial projects and services successfully!");

    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDB();
