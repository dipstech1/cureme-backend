const mongoose = require('mongoose');
const db = require('../config/keys')

const connectDB = async () => {
  try {
    await mongoose.connect(db.mongoURL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;