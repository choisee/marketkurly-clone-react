const express = require("express");
const userRouter = require("./routes/user");
const db = require("./models");
const app = express();
const cors = require("cors");

// for development - todo delete for product
app.use(
  cors({
    origin: 'http://localhost:3060',
    credentials: false,
  })
);

// connect db
db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공;");
  })
  .catch(console.error);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello! Welcome!");
});

app.use("/user", userRouter);

app.listen(3065, () => {
  console.log("==========================================");
  console.log("==== (@ ,. @) Starting Server (@ ,. @) ===");
  console.log("==========================================");
});
