const express = require("express")
const router = express.Router()
const {SignUp, Login, EditAcc} = require("../Controllers/UserController")
const {dashBoard} = require("../Controllers/UserController")
const verifyToken = require("../Middlewares/VerifyToken")

router.post("/signup", SignUp)
router.post("/login", Login)
router.post("/dashboard", dashBoard)

// Private Route
//router.post("/editAcc", ()=>VerifyToken, editacc)
router.post("/editProfile", verifyToken, EditAcc)
module.exports = router