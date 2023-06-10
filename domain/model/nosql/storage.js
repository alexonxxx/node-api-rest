import { Schema, model } from 'mongoose';

const StorageScheme = Schema(
    {
        url: { type: 'String', required: true },
        filename: { type: 'String', required: true }
    },
    {
        timestamps: true,
        versionKey: false
    })
export default model('storage', StorageScheme)