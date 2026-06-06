import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import PageRoutes from "./routes/pages.routes.js";
import AdminRoutes from "./routes/admin.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Database Connection
connectDB();

// Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// Routes
app.use("/admin", AdminRoutes);
app.use("/", PageRoutes);

app.listen(PORT, () => {
  console.log(`Server started successfully on http://localhost:${PORT}`);
});
