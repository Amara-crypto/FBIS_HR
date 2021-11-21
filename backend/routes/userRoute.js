const express = require ('express')
const router = express.Router()
const authController = require ('../controllers/authController')
const userController = require ('../controllers/userController')

router.post('/signup', authController.signup)
router.post('/login', authController.login)
// router.post('/login', authController.authLogin)

router.post('/forgotPassword', authController.forgotPassword)
router.patch('/resetPassword/:token', authController.resetPassword)

router.route('/').get(userController.getAllUsers)

router.patch(
    '/updateMyPassword', 
    authController.protect,
    authController.updatePassword
)

router.get(
        '/profile', 
        authController.protect, 
        userController.getProfile
        )

router.patch(
        '/updateMe', 
        authController.protect, 
        userController.updateMe
)

router.delete(
        '/deleteMe', 
        authController.protect, 
        userController.deleteMe
)


module.exports = router