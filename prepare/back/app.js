const express = require("express");
const userRouter = require("./routes/user");
const db = require("./models");
const app = express();
const cors = require("cors");

const session = require("express-session");
const cookieParser = require("cookie-parser");
const passportConfig = require("./passport");
const passport = require('passport');
const dotenv = require('dotenv');

// for development - todo delete for product
app.use(
  cors({
    origin: 'http://localhost:3060',
    credentials: true,
  })
);

dotenv.config();

// connect db
db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공;");
  })
  .catch(console.error);

passportConfig(); // 로그인용

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET, // 쿠키에 보내주는 랜덤 문자열(ex. cxlhy) 복원용 키
}));
app.use(passport.initialize());
app.use(passport.session());
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
