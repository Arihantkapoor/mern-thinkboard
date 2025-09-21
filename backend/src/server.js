import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import notesRoutes from './routes/notesRoutes.js'
import rateLimiter from './middlewares/rateLimiter.js';

const app = express();

dotenv.config();

const PORT = process.PORT || 5001



//middleware
app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(express.json());
app.use(rateLimiter);


app.use("/api/notes",notesRoutes);


connectDB();

app.listen(PORT, ()=>{
    console.log("server is running at port ",PORT);
})