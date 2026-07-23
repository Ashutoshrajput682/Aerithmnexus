const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ashutoshrajput682@gmail.com",
    pass: process.env.EMAIL_PASS, // Gmail App Password
  },
});

const sendMail = async ({ to, name, phone, service, message }) => {
  const mailOptions = {
    from: "ashutoshrajput682@gmail.com",
    to,
    subject: "Thank You for Contacting Us",

    html: `
      <div style="font-family:Arial;padding:20px">
        <h2>Hello ${name},</h2>

        <p>Thank you for contacting us.</p>

        <p>We have received your request and our team will contact you shortly.</p>

        <hr>

        <h3>Your Details</h3>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${to}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>

        <br>

        <p>Regards,</p>
        <h3>AerithmNexus Team</h3>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendMail;