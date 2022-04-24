const express = require("express");
const bcrypt = require("bcrypt");
const { User, Section, Product } = require("../models"); // db.User
const router = express.Router();
const passport = require("passport");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");


// POST /user/logout
router.post("/logout",isLoggedIn, (req,res,next) => {
  req.logout();
  req.session.destroy();
  res.send("ok");
});

// POST /user/login
router.post("/login", isNotLoggedIn, (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    // console.log('===== ', err,user,info)
    if (err) {
      console.error(err);
      return next(err);
    }

    if (info)  {
      console.info(info);
      return res.status(401).send(info.reason); // 허가되지 않음(401 status code)
    }

    return req.login(user, async (loginErr) => {
      if (loginErr){
        console.error(loginErr);
        return next(loginErr);
      }

      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ["password"],
        },
      });
      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next);
});

// POST /user
router.post("/", async (req, res, next) => {
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    // 이미 사용중인 아이디일 경우 처리
    if (exUser) {
      return res.status(403).send("이미 사용 중인 아이디입니다.");
    }

    // 신규 회원 가입 처리
    const hashedPassword = await bcrypt.hash(req.body.password, 256);
    await User.create({
      email: req.body.email,
      name: req.body.name,
      password: hashedPassword,
    });
    res.status(201).send("ok");
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
