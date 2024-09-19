// require('dotenv').config();
// const nodemailer = require('nodemailer');

// const sendEmail = async (formData) => {
//   let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL_USER, // your business email
//       pass: process.env.EMAIL_PASS // your email password or app password
//     }
//   });

//   let mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: process.env.EMAIL_USER, // the email to receive notifications
//     subject: 'AnytimeDockandDoor Contact Query',
//     text: `
//       New query received:
//       Full Name: ${formData.contact_fullname}
//       Email: ${formData.contact_email}
//       Phone: ${formData.contact_phone}
//       Address: ${formData.contact_address}
//       Service Type: ${formData.contact_type}
//       Message: ${formData.contact_message}
//     `
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     console.log('Email sent successfully');
    
//   } catch (error) {
//     console.error('Error sending email:', error);
//     throw error; 
//   }
// };

// module.exports = sendEmail;


require('dotenv').config();
const nodemailer = require('nodemailer');

const sendEmail = async (formData) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // your business email
      pass: process.env.EMAIL_PASS // your email password or app password
    }
  });

  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // the email to receive notifications
    subject: 'AnytimeDockandDoor Contact Query',
    text: `
      New query received:
      Full Name: ${formData.contact_fullname}
      Email: ${formData.contact_email}
      Phone: ${formData.contact_phone}
      Address: ${formData.contact_address}
      Service Type: ${formData.contact_type}
      Message: ${formData.contact_message}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    
  } catch (error) {
    console.error('Error sending email:', error);
    throw error; 
  }
};

module.exports = sendEmail;
