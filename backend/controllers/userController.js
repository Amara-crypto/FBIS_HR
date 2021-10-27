const User = require ('../models/userModel')
const AppError = require ('../utils/appError')
const catchAsync = require ('../utils/catchAsync')


const filterObj = ( obj, ...allowedFilds) =>{
    const newObj = {};
    Object.keys(obj).forEach(el => {
        if (allowedFields.includes(el)) newObj[el] = obj[el]
    })
    return newObj
}

exports.getAllUsers = catchAsync(async(req, res, next)=> {
    const user = await User.find()

    res.status(200).json({
        status: 'success',
        results: user.lenght,
        data: {
            users
        }
    })
})

exports.updateMe = catchAsync (async (req, res, next) => {

    if (req.body.password || req.body.passwordConfirm) {
        return next (
            new AppError(
                'This route is not for password updates. Please use /updateMyPassword',
                400
            )
        )
    }

    const FilteredBody = filterObj(req.body, 'name', 'email')

    const updatedUser = await User.findByIdAndUpdate(req.user.id, FilteredBody,{
        new: true,
        runValidator: true
    })
    res.status(200).json({
        status:'success',
        data: {
            user: updatedUser
        }
    })
})

exports.deleteMe = catchAsync( async(req, res, next) => {
     await User.findByIdAndUpdate(req.user.id, { active: false})

     res.status(204).json({
         status: 'success',
         data: null
     })
})