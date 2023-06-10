import { Schema, model, mongoose } from 'mongoose';

const TracksScheme = Schema(
    {
        name: { type: 'String', required: true },
        album: { type: 'String', required: true },
        cover: { type: 'String', required: true, validator: (req) => { return true }, message: "ERROR_URL" },
        artist: {
            name: { type: 'String', required: true },
            nickname: { type: 'String', required: true },
            nationality: { type: 'String', required: true }
        },
        duration: { type: "Number", required: true },
        mediaId: { type: mongoose.Types.ObjectId, required: true }
    },
    {
        timestamps: true,
        versionKey: false
    })
export default model('tracks', TracksScheme)