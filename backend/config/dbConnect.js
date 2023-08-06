const mongoose = require("mongoose");

const connectDB = async () => {
    try {

        const connected = await mongoose.connect(process.env.DB_URI);

        if (connected) {
            console.log("Successfully connected to database");
        }

    } catch (error) {
        console.log("Error while connecting with database");
        process.exit(1);
    }
}

module.exports = connectDB;