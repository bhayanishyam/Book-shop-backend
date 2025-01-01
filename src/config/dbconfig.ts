import mongoose from "mongoose"

 const connect = async () => {
    try {
        const connected = await mongoose.connect(process.env.CONNECTION_URL || "");
        console.log("Database connected : ", connected?.connection.host)
    } catch (error) {
        console.log("Database connection error : ",error)
    }
}

export default connect