import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
// import dotenv from "dotenv";
// dotenv.config();

const app = express();

// Configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credential: true,
  })
);
app.use(express.json({ limit: "16kb" }));
// Data From URLEncoded
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// Static Public Assets
app.use(express.static("public"));

app.use(cookieParser());

app.listen(process.env.PORT || 4000, () => {
  console.log(`⚙️  Server is running on port ${process.env.PORT || 4000}`);
});

// Routes Import
//routes import
import userRouter from "./routes/user.routes.js";

//routes declaration

app.use("/api/v1/users", userRouter);

export default app;
