const express = require ('express')
const dotenv = require ('dotenv')
const connectDB = require('./config/db')
const cors = require ('cors')
const morgan = require ('morgan')

const AppError = require('./utils/appError')
const globalErrorHandler = require('./controllers/errorController')
const userRouter = require('./routes/userRoute')


dotenv.config()

connectDB()

const corsOptions  = {
    'credentials': true,
    'origin': 'http://localhost:3000', 
    // 'methods': ['GET','POST','DELETE','PUT','PATCH'],
    // 'allowedHeaders': [ 'application/json', 'Accept', 'Access-Control-Allow-Headers', 'content-type',  'Origin', 'Content-Type', 'Authorization'], 
}

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors(corsOptions))
app.use(morgan('dev'))


// app.use((req,res,next) => {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, x-requested-With, Content-Type, Accept, Authorization"
//     )
//     res.header("Access-Control-Allow-Credentials", "true")
//     res.contentType("application/json")
//     res.setHeader("Content-Type", "application/json")
 
//     if (req.method === "OPTIONS") {
//         res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
//         return res.status(200).json({})
//     }
//     next()
 
// })

// app.use('/api/v1/users', function(req, res) {
//     console.log(req.header('Accept'))
//     console.log(req.header('Content-Type'))
//     console.log(req.body)
//     userRouter
// })


app.use('/api/v1/users', userRouter)

app.all('*', (req,res,next) => {
    next(new AppError(`can't find ${req.originalUrl} on this server!`, 404))
})

app.use(globalErrorHandler)

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`)
})