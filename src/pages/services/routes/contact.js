const express = require("express");
const sendMail = require("../utils/sendMail");

const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    await sendMail({
      to: email,
      name,
      phone,
      service,
      message,
    });

    res.json({
      success: true,
      message: "Mail sent successfully",
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Failed to send mail",
    });
  }
});

module.exports = router;