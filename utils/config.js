import mongoose from 'mongoose';

const conn = {};

const dbConn = async () =>{
    if(conn.isConnected){
        return
    }
    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    conn.isConnected = db.connections[0].readyState;
    console.log("Connected to MONGO")
}

export default dbConn;