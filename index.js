import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import Auth from "./routes/auth.js";
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
app.use("/", Auth);

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
