import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  creator: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  applicationDate: {
    type: Date,
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
  },
  resumeURL: {
    type: String,
    required: true,
  },
});

const Application = mongoose.model("Application", applicationSchema);

export default Application;
