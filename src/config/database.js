const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mydb';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const connect = async () => {
    try {
        await mongoose.connect(mongoURI, options);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = {
    connect
};
