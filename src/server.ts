import express from 'express'
import dotenv from 'dotenv'
import connect from './config/dbconfig'
import userRoute from './routes/userRoute'
import categoryRoute from './routes/categoryRoute'
import { errorHandler } from './middleware/errorHandler'
dotenv.config()

connect()
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json())

// testing api
app.get("/", (req, res) => {
    res.send("Hello world");
})

app.use("/api/user", userRoute)
app.use("/api/category", categoryRoute)
app.use(errorHandler)


app.listen(port, () => {
    console.log(`Sever listen to Post ${port}`);
})

