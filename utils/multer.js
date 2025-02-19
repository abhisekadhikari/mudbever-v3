const multer = require("multer")
const path = require("path")
// Multer config
module.exports = multer({
    storage: multer.diskStorage({}),
    // limits: { fileSize: 1 * 1024 * 1024 }, // 1 MB
    fileFilter: (req, file, cb) => {
        let ext = path.extname(file.originalname)
        if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
            cb(new Error("Unsupported file type!"), false)
            return
        }
        cb(null, true)
    },
})
