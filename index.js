const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;
//endpoints setting
const userRouter = require("./Routes/userRoutes");
const visitor = require("./Routes/visitor")
const mongoose = require("mongoose");

app.use(express.json());

//use of middlewares

// app.use((res, req, next) => {
//   console.log("HTTP Method - " + req.method + ", URL -" + req.URL);
//   next();
// });

//as the response send by controller in form of string so we convert it in form of json

app.use("/users", userRouter);
app.use("/visitor", visitor);
app.get("/", (req, res) => {
  res.send("hello");
});

mongoose.connect(
  "mongodb+srv://aniket22:aniket123456@cluster0.aug4tch.mongodb.net/microtask2?retryWrites=true&w=majority",
  () => {
    console.log("Connected to MongoDB");
  }
);

app.listen(3000, () => {
  console.log("started");
});


// export 'app'
module.exports = app;
