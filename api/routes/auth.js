const express = require("express");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const passport = require("passport");

const router = express.Router();
const Users = require("../models/users");

// Login
router.post(
  "/login",
  passport.authenticate("local", { session: true }),
  (req, res) => {
    res.json({ id: req.user.id, username: req.user.username });
  }
);

// Logout
router.get("/logout", (req, res) => {
  req.logout();
  res.json({ message: "you are logged out" });
});

// Registration
router.post("/registration", async (req, res) => {
  const {
    username,
    password,
    email,
    roles,
    pic,
    fullname,
    firstname,
    lastname,
    occupation,
    companyName,
    phone,
    language,
    timeZone,
    website,
  } = req.body;

  // Find if username & email doesn't exist
  try {
    // Store hash in your password DB.
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, (err, hash) => {
      const id = uuidv4();
      const newUser = new Users({
        id,
        username,
        email,
        password: hash,
        roles,
        pic,
        fullname,
        firstname,
        lastname,
        occupation,
        companyName,
        phone,
        language,
        timeZone,
        website,
      });
      newUser.save((err, doc) => {
        if (err) return console.error(err);
        res.json(doc);
      });
    });
  } catch (e) {
    res.json({ message: e.message });
  }
});

// Get User Data
router.get("/me", authenticate, (req, res) => {
  const { user } = req;
  if (user) {
    res.status(200).json(user);
  }
  res.status(401);
});

// Check with passport if user is authenticated
function authenticate(req, res, next) {
  if (req.isAuthenticated()) return next();

  return res.status(401);
}

module.exports = router;
