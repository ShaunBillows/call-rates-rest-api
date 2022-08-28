const { Router } = require("express");
const userRouter = Router();
const { readRates } = require("./controllers");
// const { hashPass, comparePass, tokenCheck } = require("../middleware");

// // admin routes
// userRouter.get("/admin", readAllUsers);

// // user routes
// userRouter.get("/user", tokenCheck, readUser)
// userRouter.post("/user", hashPass, createUser);
// userRouter.delete("/user", tokenCheck, comparePass, deleteUser); // note: delete does not have body. User info is sent in the query string parameters.
// userRouter.patch("/user", tokenCheck, comparePass, updateUser) 

// // login routes
// // userRouter.get("/login", tokenCheck, login)
// // userRouter.post("/login", comparePass, login)

userRouter.get("/region", readRates)

module.exports = userRouter;

