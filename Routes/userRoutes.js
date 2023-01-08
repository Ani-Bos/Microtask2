const express = require("express");
const { signin, signup } = require("../Controller/userController");
const userRouter = express.Router();

userRouter.post("/signup", signup);
//signin===login
userRouter.post("/signin", signin);

module.exports = userRouter;
