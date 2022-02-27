const express = require('express')
const dotenv = require('dotenv')
const exphb = require('express-handlebars')
//const connectToDatabase = require('./models/index');
const connectDB = require('./config/db')
const error = require('./middleware/error')
const path = require('path')
const colors = require('colors')
const cors = require('cors')
const morgan = require('morgan')

// Route Files
const frankfurtcontact = require('./routes/frankfurtcontact')
const logs = require('./routes/logsystem')
const techs = require('./routes/technician')
const auth = require('./routes/auth');

const errorHadler = require('./middleware/error');

// Load env vars
//dotenv.config({path:'./config/config.env'})

const app = express()

app.use(express.json())

//Dev logging middleware
if(process.env.NODE_ENV === 'production'){
    // Set static folder
     app.use(express.static('client/build'));

     app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

//Set CORS
app.use(cors({
    origin:''
}))

//Set Static folder
app.use(express.static(path.join(__dirname, `public`)))

//Mount Routers
app.use('/api/v1/frankfurtcontact', frankfurtcontact)
app.use('/api/v1/logs', logs)
app.use('/api/v1/techs', techs)
app.use('/api/v1/auth', auth)
//app.use('/api/v1/users', users)
app.use(errorHadler)

const PORT = process.env.PORT || 4000

// Connect to Data Base
connectDB();

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
});

/**
 *  ,
 * //CONNECTINT TO DATA BASE
 connectToDatabase( {
             useNewUrlParser: true, useUnifiedTopoology: true 
        })
 .then((error) => {
    if (error) {
        console.log(error)
        return process.exit(1)
    }
    app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
});

});
 */