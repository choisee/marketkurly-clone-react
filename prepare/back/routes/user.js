const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../models"); // db.User
const router = express.Router();

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
