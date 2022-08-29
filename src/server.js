require("./db/connection") 
const express = require("express")
const userRouter = require("./rates/routes");
const app = express();
const port = process.env.PORT || 5001

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log("Listening on port 5001.")
  })