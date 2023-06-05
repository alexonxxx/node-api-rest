import mongoose from 'mongoose';


const dbConnect = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(res => console.log("Connection established")).catch(err => { throw new Error("Connection error: " + err) });
}
const closeConnection = () => {

}
export { dbConnect, closeConnection };