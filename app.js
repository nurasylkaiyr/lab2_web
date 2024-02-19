const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.mail.ru',
  port: 465,
  secure: true,
  auth: {
    user: 'nura817405@mail.ru',
    pass: 'u0s7660cV5samX6PRviL'
  }
});

function sendEmail(recipient, subject, message) {
  const mailOptions = {
    from: 'nura817405@mail.ru',
    to: recipient,
    subject: subject,
    text: message
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.error('Error occurred:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

sendEmail('kair.nurasyl@gmail.com', 'TEST', 'Hello, Nurasyl!');
