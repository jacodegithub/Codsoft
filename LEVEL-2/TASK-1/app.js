const express = require("express")
const app = express();
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
require('dotenv').config()
let cors = require('cors')
const cookieParser = require('cookie-parser')
const errorHandler = require('./middleWare/error')

// import routes
const authRoutes = require('./routes/authRoutes')

// Middleware
app.use(cors()); // Enable CORS
app.use(morgan('dev')); // Logging middleware
app.use(bodyParser.json()); // JSON parsing middleware
app.use(express.json());
app.use(cookieParser());

// Error middleware
app.use(errorHandler);

// Routes middleware
app.use(authRoutes)

// Database connection
mongoose.connect(process.env.DATABASE )
.then(() => console.log("DB connected"))
.catch((error) => console.log(error));




//port 
const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`server running on port ${port}`)
} )