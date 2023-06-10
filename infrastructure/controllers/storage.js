import storageRepository from '../repositories/storage.js'
const createStorage = async (req, res) => {
    const { body, file } = req;
    const fileData = {
        url: `${process.env.PUBLIC_URL}/${file.filename}`,
        filename: file.filename
    }
    const data = await storageRepository.save(fileData);
    res.send(data);

}

export { createStorage }