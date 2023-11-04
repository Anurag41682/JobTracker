import Application from "../models/application.js";

import { BlobServiceClient } from "@azure/storage-blob";

const AZURE_STORAGE_CONNECTION_STRING =
  process.env.AZURE_STORAGE_CONNECTION_STRING;
const CONTAINER_NAME = process.env.CONTAINER_NAME;

const deleteOldResume = async (req, res, next) => {
  try {
    const applicationId = req.params.id;
    const application = await Application.findById(applicationId);
    if (!application) {
      return res.status(404).json({ message: "User not found" });
    }
    const blobName = application.resumeFileName;
    // Create a BlobServiceClient
    const blobServiceClient = BlobServiceClient.fromConnectionString(
      AZURE_STORAGE_CONNECTION_STRING
    );
    // Get a reference to a container
    const containerClient =
      blobServiceClient.getContainerClient(CONTAINER_NAME);
    // Get a reference to a blob
    const blobClient = containerClient.getBlobClient(blobName);
    // Delete the blob
    const deleteResponse = await blobClient.deleteIfExists();
    if (deleteResponse.succeeded) {
      console.log(`Blob ${blobName} deleted successfully.`);
      next();
    } else {
      console.error(`Failed to delete blob ${blobName}.`);
      res.status(500).json({ message: "Failed to delete the resume file." });
    }
  } catch (error) {
    console.error("Error deleting the resume file:", error);
    res
      .status(500)
      .json({ message: "An error occurred while deleting the resume file." });
  }
};

export default deleteOldResume;
