const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env file

module.exports = async () => {
    try {
        const { MONGO_URL } = process.env; // Access MONGO_URL from environment variables
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect(MONGO_URL, connectionParams);
        console.log("Connected to database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};