
// controllers/contactController.js
const ContactDetail = require("../models/contactForm");
const sendEmail = require('../utils/mailer');

exports.createContact = async (req, res) => {
  const { contact_fullname, contact_email, contact_message,contact_type,
    contact_phone,
    contact_address
 } = req.body;

  const newContact = new ContactDetail({
    contact_fullname,
    contact_email,
    contact_message,
    contact_type,
    contact_phone,
    contact_address,
  });

  try {
    const savedContact = await newContact.save();
    await sendEmail(req.body); 
    console.log('Email sent successfully');
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log("error:", error.message)
  }
};
