import { Schema, model } from 'mongoose';

const userScheme = Schema(
    {
        name: { type: 'String', required: true },
        age: { type: 'Number', required: true },
        email: { type: 'String', required: true, unique: true },
        phone: { type: 'String', unique: true },
        password: { type: 'String', required: true },
        role: { type: ["user", "admin"], default: "user", required: true }
    },
    {
        timestamps: true,
        versionKey: false
    })
export default model('users', userScheme)