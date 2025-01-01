import express from 'express'
import dotenv from 'dotenv'
import connect from './config/dbconfig'
import userRoute from './routes/userRoute'
import categoryRoute from './routes/categoryRoute'
import { errorHandler } from './middleware/errorHandler'
import morgan from 'morgan'
import cors from 'cors'

dotenv.config()

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


connect()
const port = process.env.PORT || 5000;
const app = express();

app.use(cors(corsOptions))
app.use(express.json())
app.use(morgan('tiny'))

// testing api
app.get("/", (req, res) => {
    res.send("Hello world");
})

app.use("/api/user", userRoute)
app.use("/api/category", categoryRoute)
app.use(errorHandler)

app.use("/*", (req, res) => {
    res.status(404).json({ message: "Not Found" })
})


app.listen(port, () => {
    console.log(`Sever listen to Post ${port}`);
})

