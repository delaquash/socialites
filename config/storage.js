import multer from "multer";
/* Creating a storage object that will be used to store the file. */
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "publics/assets");
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
});

export default storage;