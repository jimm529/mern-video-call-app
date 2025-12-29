import dotenv from "dotenv";
dotenv.config();

import express from "express";
import path from "path";
import cors from "cors";
import { Inngest } from "inngest";
import { serve } from "inngest/express";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";

const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT || 3000;

/* ================= MIDDLEWARE ================= */
app.use(express.json());
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));

/* ================= INNGEST ================= */
const inngest = new Inngest({ name: "Books API" });

const testFunction = inngest.createFunction(
  { id: "test-function" },
  { event: "test/event" },
  async () => {
    return { success: true };
  }
);

app.use(
  "/api/inngest",
  serve({
    client: inngest,
    functions: [testFunction],
  })
);

/* ================= ROUTES ================= */
app.get("/api/health", (req, res) => {
  res.json({ msg: "API is running" });
});

/* ================= PRODUCTION ================= */
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "../frontend/dist/index.html")
    );
  });
}

/* ================= START SERVER ================= */
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server failed to start:", error);
    process.exit(1);
  }
};

startServer();
