// routes/contactRoutes.js
const express = require("express");
const sendEmail = require('../utils/mailer'); 
const router = express.Router();
const { createContact } = require("../controller/contactController");


router.post("/", createContact);

module.exports = router;
