import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import cors from "cors";
import customerRouter from "../src/routers/customerRouter";

const app = express();
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL as string;

app.use(express.json());
app.use(cors());
app.use("/api/v1/customer", customerRouter);

mongoose.connect(DB_URL).then(async () => {
  const conn = await mongoose.connect(DB_URL);
  console.log("DB is connected", conn.connection.host);
});

app.listen(PORT, () => {
  console.log("App is running in port :", PORT);
});

// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import customerRouter from "../src/router/customerRouter"
// dotenv.config();

// const app = express();

// const PORT = process.env.PORT;
// const DB_URL = process.env.DB_URL as string;

// app.use(express.json());
// app.use("/api/v1/customer",customerRouter)

// mongoose.connect(DB_URL).then(() => {
//   console.log("DB is connected");
// });

// app.listen(PORT, () => {
//   console.log("App is running in port :", PORT);
// });
