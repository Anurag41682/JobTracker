import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import auth from "./routes/auth.js";
import addApplication from "./routes/addApplication.js";
import fetchApplications from "./routes/fetchApplications.js";
import setDp from "./routes/setDp.js";
import getDp from "./routes/getDp.js";
import deleteApplication from "./routes/deleteApplication.js";
import updateApplication from "./routes/updateApplication.js";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Define the directory where your static files are located
const staticFilesDirectory = path.join(__dirname, "uploads");

dotenv.config();
const app = express();

//----------Middlewares--------------
//------ Global --------
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
// Serve static files from the specified directory
app.use("/uploads", express.static(staticFilesDirectory));

//

//----- Specific -------
app.use("/", auth);
app.use("/", addApplication);
app.use("/", fetchApplications);
app.use("/", setDp);
app.use("/", getDp);
app.use("/", deleteApplication);
app.use("/", updateApplication);

//-------Mongodb Setup ---------
mongoose
  .connect(process.env.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is listening");
    });
  })
  .catch((err) => {
    console.log(`Database was unable to connect!: ${err}`);
  });
