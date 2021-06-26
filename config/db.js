const mongoose = require('mongoose');

const connectionToDb = async ()=> {
    try {
        await mongoose.connect(process.env.MONGODB_LOCAL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected 👽');
    } catch (err) {
        console.log('Failed to connect to MongoDB', err); 
    }
}

module.exports = connectionToDb;

