const express = require("express");
const router = express.Router();

const transporter = require("../utils/sendMail"); // path check kar lena

router.post("/contact", async (req, res) => {
  try {
    console.log("Contact API Hit");

    const { name, email, phone, service, message } = req.body;

    console.log(req.body);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "ashutoshrajput682@gmail.com",
      replyTo: email,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    };

    console.log("Sending Mail...");

    const info = await transporter.sendMail(mailOptions);

    console.log("Mail Sent:", info.response);

    res.json({
      success: true,
      message: "Mail sent successfully",
    });

  } catch (error) {
    console.log("Mail Error:", error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});


module.exports = router;