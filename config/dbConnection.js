const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        console.log('Starting database connection...');
        
        if (!process.env.CONNECTION_STRING) {
            throw new Error('CONNECTION_STRING is not defined in environment variables');
        }
        

        const conn = await mongoose.connect(process.env.CONNECTION_STRING, {
            dbName: 'QuriousBitDB'
        });

    } catch (error) {
        console.error('MongoDB Connection Error:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB; 