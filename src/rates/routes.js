const { Router } = require("express");
const userRouter = Router();
const { readRates } = require("./controllers");

userRouter.get("/rates", readRates)

module.exports = userRouter;
