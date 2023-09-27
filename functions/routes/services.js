const express = require('express');
const router = express.Router();
const services = require('../resources/services.json')

router.get('/', (req, res) => {
    res.send(services);
});

router.post('/', (req, res) => {
    console.log('post');

    const newService = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
    }

    services.push(newService);
    console.log(services);
    res.redirect('/')
});

module.exports = router;