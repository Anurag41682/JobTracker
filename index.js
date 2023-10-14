import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import auth from "./routes/auth.js";
import addApplication from "./routes/addApplication.js";
import fetchApplications from "./routes/fetchApplications.js";
// import passport from "passport";
dotenv.config();
const app = express();

//----------Middlewares--------------
//------ Global --------
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
// app.use(passport.initialize());

//----- Specific -------
app.use("/", auth);
app.use("/", addApplication);
app.use("/", fetchApplications);

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
