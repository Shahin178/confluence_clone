const express = require("express");
const router = express.Router();
const authCtrl = require("../controllers/authController");

router.post("/register", authCtrl.register);
router.post("/login", authCtrl.login);
router.get("/getAllUser", authCtrl.getAllUser);
router.post("/forgot-password", authCtrl.forgotPassword);
router.post("/verify-otp", authCtrl.varifyOtp);
router.post("/reset-password", authCtrl.resetPassword);

module.exports = router;
