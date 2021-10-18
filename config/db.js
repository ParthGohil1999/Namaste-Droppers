require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
    // Database connection 🥳
    try {
        mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true });
        const connection = mongoose.connection;
        connection.once('open', () => {
            console.log('Database connected 🥳🥳🥳🥳');
        })
    } catch (error) {
        handleError(error);
        console.log('Database connection failed 🥳🥳🥳🥳');
    }

}

// mIAY0a6u1ByJsWWZ

module.exports = connectDB;