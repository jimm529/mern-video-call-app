import dotenv from "dotenv";
dotenv.config(); // MUST be first

import express from "express";
import path from "path";
import cors from "cors";
import { ENV } from "./lib/env.js";
import {serve} from "inngest/express"
import { connectDB } from "./lib/db.js";

const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT || 3000;

// API ROUTES
app.get("/api/health", (req, res) => {
  res.status(200).json({ msg: "API is running" });
});


app.use("/api/inngest",serve);
app.get("/", (req, res) => {
  res.status(200).json({ msg: "Books API working" });
});
app.use(express.json())
app.use(cors({origin:ENV.CLIENT_URL,credentials:true}))
// PRODUCTION MODE
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "../frontend/dist/index.html")
    );
  });
}

// START SERVER
const startServer = async () => {
  try {
    app.listen(PORT, async () => {
      console.log(`Server running on port: ${PORT}`);
      await connectDB(); // Connect to MongoDB
    });
  } catch (error) {
    console.error("Server failed to start:", error);
    process.exit(1);
  }
};

startServer();
