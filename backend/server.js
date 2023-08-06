const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/errorMiddleware");
const connectDB = require("./config/dbConnect");

dotenv.config({
    path : "./config/config.env"
})

const server = express();
connectDB();


const PORT = process.env.PORT;

server.use(errorMiddleware);

server.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT}`)
})