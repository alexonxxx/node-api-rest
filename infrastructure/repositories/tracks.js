import TrackModel from '../../domain/model/nosql/tracks.js';
import mongoose from 'mongoose'
//Should be with typescript to create interfaces for diferent type of persistences
const getAll = () => {
    return TrackModel.find();
}

const getById = (id) => {
    return TrackModel.findOne({ _id: id });
}

const save = (track) => {
    if (track._id == null) {
        return TrackModel.create(track);
    } else {
        return TrackModel.updateOne({ _id: track._id }, track);
    }
}
const deleteById = (id) => {
    return TrackModel.deleteOne({ _id: id });
}

export default { getAll, save, getById, deleteById };