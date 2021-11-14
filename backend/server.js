const express = require ('express')
const dotenv = require ('dotenv')
const connectDB = require('./config/db')
const cors = require ('cors')

const AppError = require('./utils/appError')
const userRouter = require('./routes/userRoute')

dotenv.config()

connectDB()

const app = express()

const corsOptions  = {
    origin: 'http://127.0.0.1:3000', //frontend url
    credentials: true}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//ROUTES
app.all( '/', function( req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', ' X-Requested-With')
})
app.use('/api/v1/users', userRouter)

// app.all('*', (req,res,next) => {
//     next(new AppError(`can't find ${req.originalUrl} on this server!`, 404))
// })


const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`)
})