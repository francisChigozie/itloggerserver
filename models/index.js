const mongoose = require('mongoose')

  const connectToDatabase = async() => {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log(`DB gserver connected!`.cyan.underline.bold)
    } catch (err) {
        console.error(err.message);
    }
}

module.exports = connectToDatabase;