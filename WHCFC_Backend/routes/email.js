import express from "express";
import nodemailer from "nodemailer";
import db from "../db/db.js";

const router = express.Router();

const emailSending = (subject, body) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.APP_MAILING_SENDER_EMAIL,
      pass: process.env.APP_MAILING_PASSWORD,
    },
  });

  var mailOptions = {
    from: process.env.APP_MAILING_SENDER_EMAIL,
    to: process.env.APP_MAILING_RECEIVER_EMAIL,
    subject: subject,
    text: body,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

router.route("/contact").post(async (req, res) => {
  var emailBody =
    "Sender name: " +
    req.body.firstname +
    req.body.lastname +
    "\nSender email: " +
    req.body.email +
    "\nSender phone: " +
    req.body.phone +
    "\nMessage: " +
    req.body.message;

  var sql =
    "INSERT INTO contact (firstname, lastname, email, phone, message) VALUES (?, ?, ?, ?, ?)";

  try {
    await db.query(sql, [
      req.body.firstname,
      req.body.lastname,
      req.body.email,
      req.body.phone,
      req.body.message,
    ]);
    emailSending("Contact Form Submission", emailBody);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

export default router;
