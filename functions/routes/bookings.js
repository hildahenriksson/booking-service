const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Booking");
 });

//  router.post('/' (req, res) => {
    
//  });

 module.exports = router;