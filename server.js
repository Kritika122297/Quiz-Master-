
//packages imports
import express from 'express';
import dotenv from 'dotenv';
import 'express-async-errors';
import cors from 'cors';
import morgan from 'morgan';
import multer from 'multer';

//files import 
import connectDB from './config/db.js';

//routes import
import authRoutes from './routes/authRoutes.js'
import quizRoutes from './routes/quizRoutes.js'
import errorMiddleware from './middleware/errorMiddleware.js';


//dotenv Config
dotenv.config();

//mongodb connection
connectDB();


//rest object
const app = express();

// app.use(express.urlencoded({ extended: false}));

//middlewares
app.use(express.json());
app.use(cors())
app.use(morgan('dev'))


//routes
app.use("/api/auth", authRoutes);
app.use("/api", quizRoutes);

//validation middleware
app.use(errorMiddleware);

//port
const PORT = process.env.PORT || 4532;

//listen
app.listen(PORT, () => {
    console.log(`Node Server Running on Port no ${PORT}`);
});