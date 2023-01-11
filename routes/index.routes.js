const express = require('express');
const router = express.Router();
const axios = require('axios');
const data = require('../data/phones.json')

/* GET home page */
router.get("/", (req, res, next) => {
  res.json('Home page');
});

// GET all phones

router.get("/phones", (req, res, next) => {
    console.log(data)
    res.status(201).json(data)
});

router.get("/phones/:id", (req, res, next) => {
    const { id } = req.params;
    console.log("ID: ", id);
    const singlePhone = data.filter(phone => phone.id == id)
    console.log("Single Phone: ", singlePhone);
    res.status(201).json(singlePhone)
})

module.exports = router;
