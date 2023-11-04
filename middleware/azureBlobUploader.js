import { BlobServiceClient } from "@azure/storage-blob";
import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const azureBlobUploader = async (req, res, next) => {
  const AZURE_STORAGE_CONNECTION_STRING =
    process.env.AZURE_STORAGE_CONNECTION_STRING;
  const CONTAINER_NAME = process.env.CONTAINER_NAME;
  try {
    const blobServiceClient = BlobServiceClient.fromConnectionString(
      AZURE_STORAGE_CONNECTION_STRING
    );
    const containerName = CONTAINER_NAME;
    const containerClient = blobServiceClient.getContainerClient(containerName);

    upload.single("file")(req, res, async (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Error uploading file.");
      }
      const file = req.file;
      const timestamp = Date.now();
      const blobName = `${
        file.originalname
      }-${timestamp}${file.originalname.substring(
        file.originalname.lastIndexOf(".")
      )}`;
      const blockBlobClient = containerClient.getBlockBlobClient(blobName);
      const data = file.buffer;
      const uploadBlobResponse = await blockBlobClient.upload(
        data,
        data.length
      );
      req.blobName = blobName;
      console.log(`File uploaded: ${uploadBlobResponse.requestId}`);
      next();
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error uploading file.");
  }
};

export default azureBlobUploader;
