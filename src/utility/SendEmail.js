var nodemailer = require("nodemailer");

const SendEmail = async (EmailTo, EmailText, EmailSubject) => {
  let transporter = nodemailer.createTransport({
    host: "mail.gmail.com",
    port: 25,
    secure: false,
    auth: {
      user: "shuvoprogramer@gmail.com",
      pass: "~sR4[bhaC[Qs",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOptions = {
    from: "Inventory <shuvoprogramer@gmail.com>",
    to: EmailTo,
    subject: EmailSubject,
    text: EmailText,
  };

  return await transporter.sendMail(mailOptions);
};
module.exports = SendEmail;
