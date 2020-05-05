const nodemailer = require("nodemailer");

const emailSender = async option => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD
    }
  });

  const message = {
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to: option.email,
    subject: option.subject,
    text: option.message
  };

  const info = await transporter.sendMail(message);

  console.log("Message Sent: ", info.messageId);
};

module.exports = emailSender;
