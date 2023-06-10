import multer from 'multer';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath( import.meta.url));
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const pathStorage = `${__dirname}/../../storage`;
        cb(null, pathStorage);
    },
    filename: function (req, file, cb) {
        const ext = file.originalname.split('.').pop();
        const baseName = file.originalname.split('.').shift();
        const filename = `${baseName}-${Date.now()}.${ext}`;
        cb(null, filename)
    }
});

export default multer({ storage });