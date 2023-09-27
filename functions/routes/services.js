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

router.delete('/:title', (req, res) => {
    const title = req.params.title;
    const serviceToDelete = services.find(service => service.title === title);
    const index = services.indexOf(serviceToDelete)

    if (index !== -1) {
        services.splice(index, 1);
        console.log('Deleted service: ' + title)
        res.send(`Service with title "${title}" was deleted.`);
    } else {
        res.status(404).send(`Service with title "${title}" was not found.`);
    }
})

module.exports = router;