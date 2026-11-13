import multer from "multer";

const productDiskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'assets/uploads/products-images')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

export const productUpload = multer({ storage: productDiskStorage })