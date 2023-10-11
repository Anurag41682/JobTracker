const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
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
  },
  jobDescription: {
    type: String,
  },
  resumeFile: {
    type: String,
  },
});

const Application = mongoose.model("Application", applicationSchema);

export default Application;
