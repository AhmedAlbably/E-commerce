const express = require("express");

const router = express.Router();
const passport = require("passport");
const {
  signupValidator,
  loginValidator,
} = require("../utils/validators/authValidator");

const {
  signup,
  login,
  googleCallback,
  forgotPassword,
} = require("../controllers/authService");

router.route("/signup").post(signupValidator, signup);
router.route("/login").post(loginValidator, login);
router.post("/forgotPassword", forgotPassword);
// router.post('/verifyResetCode', verifyPassResetCode);
// router.put('/resetPassword', resetPassword);

// Sign in with google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "consent",
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login-failed",
  }),
  googleCallback
);

// router
//   .route("/:id")
//   .get(getUserValidator, getUser)
//   .put(uploadUserImage, resizeImage, updateUserValidator, updateUser)
//   .delete(deleteUserValidator, deleteUser);

module.exports = router;
