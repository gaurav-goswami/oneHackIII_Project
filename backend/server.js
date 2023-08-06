const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/errorMiddleware");
const connectDB = require("./config/dbConnect");

// routes import 
const otpRoute = require("./routes/otp");
const authRoute = require("./routes/auth");

dotenv.config({
    path: "./config/config.env"
})

const server = express();
server.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    credentials: true
}))
server.use(express.json());
server.use(cookieParser());

connectDB();


const PORT = process.env.PORT;

server.use("/api/v1/otp" , otpRoute);
server.use("/api/v1/auth" , authRoute);

server.use(errorMiddleware);

server.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT}`)
})