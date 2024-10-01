const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors()); 
app.use(bodyParser.json());

app.post('/api/vol-info', (req, res) => {
    const contactData = req.body;
    
    // Process the data, e.g., store it in a database (MySQL) or send an email
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
        user: process.env.APP_MAILING_SENDER_EMAIL,
        pass: process.env.APP_MAILING_PASSWORD,
        },
    });

    // Set up email data
    const mailOptions = {
        from: process.env.APP_MAILING_SENDER_EMAIL, // sender address
        to: process.env.APP_MAILING_RECEIVER_EMAIL, contactData: contactData.email, // list of receivers
        subject: 'New Volunteer Application Form Submission',
        text: `You have received a new Volunteer Application form submission.\n\nFirst Name: ${contactData.firstName}\nLast Name: ${contactData.lastName}\nEmail: ${contactData.email}\nMessage: ${contactData.message}`,
        html: `<p>You have received a new Volunteer Application form submission.</p><ul>
                <li>First Name: ${contactData.firstName}</li>
                <li>Last Name: ${contactData.lastName}</li>
                <li>Email: ${contactData.email}</li>
                <li>Message: ${contactData.message}</li>
                </ul>`,
    };

    // Send mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ message: 'Error sending email', error });
        } else {
            return res.status(200).json({ message: 'Volunteer Application form submitted successfully and email sent!', info: info.response });
        }
    });
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
