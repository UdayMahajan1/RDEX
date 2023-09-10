require('dotenv').config();
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');

const sendMail = (name, email) => {

  const data = {
    name: name, 
    email: email
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
    tls: {
      rejectUnauthorized: true
    }
  });

  ejs.renderFile(path.join(__dirname, 'views/eemail.ejs'), data, (err, data) => {
    if (err) { console.log(err) }
    else {
      const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Welcome to RDEX',
        html: data
      }
      transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          console.log(err);
        } else {
          console.log('Message sent: ' + info.response);
        }
      });
    }
  });
}

module.exports = sendMail;

