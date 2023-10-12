import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "uploads/";

    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueFilename = `${file.originalname}-${Date.now()}${path.extname(
      file.originalname
    )}`;
    cb(null, uniqueFilename);
  },
});

const upload = multer({ storage });

export default upload;
