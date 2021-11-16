const express = require ('express')
const dotenv = require ('dotenv')
const connectDB = require('./config/db')
const cors = require ('cors')
const morgan = require ('morgan')
const http = require('http')

const AppError = require('./utils/appError')
const userRouter = require('./routes/userRoute')


dotenv.config()

connectDB()

const corsOptions  = {
    'credentials': true,
    'origin': 'http://localhost:3000', 
    'methods': ['GET','POST','DELETE','PUT','PATCH'],
    'allowedHeaders': [ 'application/json', 'Accept', 'Access-Control-Allow-Headers', 'content-type',  'Origin', 'Content-Type', 'Authorization'],
    'preflightContinue': false,   
}

const app = express()
// const app = http.createServer(function(req, res){
//     res.setHeader('Content-Type', 'application/json')
//     res.end
// })
// app.accepts('application/json')
app.use(express.json())
app.use(express.urlencoded({extended: false}))
// app.use( function (req, res) {
//     res.setHeader('Content-Type', 'Application/json')
// })
app.use(cors(corsOptions))
app.use(morgan('combined'))



//ROUTES
// app.all( '/api/', function( req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
//     res.header("Access-Control-Allow-Credentials", "true")
//     res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept, X-Access-Token,X-Key")

//     res.contentType('application/json')

//     next()
// })

// app.use('/api/v1/users', function(req, res) {
//     console.log(req.header('Accept'))
//     console.log(req.header('Content-Type'))
//     console.log(req.body)
//     userRouter
// })


app.use('/api/v1/users', userRouter)

// app.all('*', (req,res,next) => {
//     next(new AppError(`can't find ${req.originalUrl} on this server!`, 404))
// })


const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`)
})