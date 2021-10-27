const express = require ('express')
const dotenv = require ('dotenv')
const connectDB = require('./config/db')

const AppError = require('./utils/appError')
const userRouter = require('./routes/userRoute')

dotenv.config()

connectDB()

const app = express()
app.use(express.json())


//ROUTES
app.use('/api/v1/users', userRouter)

app.all('*', (req,res,next) => {
    next(new AppError(`can't find ${req.originalUrl} on this server!`, 404))
})


const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`)
})