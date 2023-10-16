import mongoose from "mongoose";

// userSchmema is the schma that gives the structure of the data that is going to stored
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  dpURL: {
    type: String,
    default: null,
  },
});

// model is the constructor function that helps to create instance of that particular schema and do the crud operation in the collection.
const User = mongoose.model("User", userSchema);
export default User;
