import User from "../models/user.js";
import { BlobServiceClient } from "@azure/storage-blob";

async function deleteOldDp(req, res, next) {
  const AZURE_STORAGE_CONNECTION_STRING =
    process.env.AZURE_STORAGE_CONNECTION_STRING;
  const CONTAINER_NAME = process.env.CONTAINER_NAME;
  const jwtToken = req.headers.authorization;
  const decodedToken = JSON.parse(atob(jwtToken.split(".")[1]));
  try {
    const user = await User.findById(decodedToken.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const blobName = user.dpFileName;
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
    }
    next();
  } catch (err) {}
}

export default deleteOldDp;
