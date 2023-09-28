const express = require('express');
const router = express.Router();
const uuid = require('uuid')
const services = require('../resources/services.json')

router.get('/', (req, res) => {
    res.send(services);
});

router.post('/', (req, res) => {
    console.log('post');

    const newService = {
        id: uuid.v4(),
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imgURL: req.body.url,
    }

    services.push(newService);
    console.log(services);
    res.redirect('/')
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const serviceToDelete = services.find(service => service.id === id);
    const index = services.indexOf(serviceToDelete)

    if (index !== -1) {
        services.splice(index, 1);
        console.log('Deleted service: ' + id)
        res.send(`Service with id "${id}" was deleted.`);
    } else {
        res.status(404).send(`Service with id "${id}" was not found.`);
    }
})

module.exports = router;