import StorageModel from '../../domain/model/nosql/storage.js';
import mongoose from 'mongoose'
//Should be with typescript to create interfaces for diferent type of persistences
const save = (storage) => {
    if (storage._id == null) {
        return StorageModel.create(storage);
    } else {
        return StorageModel.updateOne({ _id: storage._id }, storage);
    }
}

export default { save };