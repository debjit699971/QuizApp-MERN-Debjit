const router = require("express").Router();
const bcrypt = require("bcrypt");
const user = require("../models/user.model");
const jwt = require("jsonwebtoken");

router.route("/").get((req, res) => {
  user
    .find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("error : " + err));
});

router.route("/add").post(async (req, res) => {
  try {
    console.log("📩 Incoming Register Request:", req.body);   // <-- DEBUG

    const name = req.body.name;
    const email = req.body.email.toLowerCase();
    const password = await bcrypt.hash(req.body.password, 10);

    const doc = await user.findOne({ email }).exec();
    if (doc) {
      console.log("⚠️ Account already exists:", email);   // <-- DEBUG
      return res.status(400).json({ message: "Account already exists!" });
    }

    const newuser = new user({ name, email, password });
    await newuser.save();

    console.log("✅ User Registered:", email);   // <-- DEBUG
    return res.status(200).json({ message: "User added successfully!" });
  } catch (err) {
    console.error("❌ Registration Error:", err);   // <-- DEBUG
    return res.status(500).json({ message: "Server error", error: err.message });
  }
});

router.route("/login").post(async (req, res) => {
  try {
    const email = req.body.email.toLowerCase();
    const password = req.body.password;

    console.log("📩 Incoming Login Request:", { email, password }); // DEBUG

    const doc = await user.findOne({ email }).exec();
    if (!doc) {
      console.log("❌ No account found with:", email);
      return res.status(400).json({ message: "Account not found" });
    }
    
    console.log("🔐 Plain password received from frontend:", password);
    console.log("🔐 Stored hash in DB:", doc.password);

    // Compare plain password with hashed password in DB
    const passwordCheck = await bcrypt.compare(password, doc.password);

    if (!passwordCheck) {
      console.log("❌ Wrong password for:", email);
      return res.status(400).json({ message: "Wrong Credentials!" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: doc._id, email: doc.email },
      process.env.ACCESS_TOKEN_SECRET
    );

    res.setHeader("Access-Control-Expose-Headers", "*");
    res.setHeader("auth-token", token);

    console.log("✅ Login successful for:", email);
    return res.status(200).json({ name: doc.name });

  } catch (err) {
    console.error("❌ Login Error:", err);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
