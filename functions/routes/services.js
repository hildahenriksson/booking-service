const express = require('express');
const router = express.Router();
// const uuid = require('uuid')
const crypto = require('crypto');
const services = require('../resources/services.json')

router.get('/', (req, res) => {
    res.send(services);
});

router.post('/', (req, res) => {

    const newService = {
        id: crypto.randomUUID(),
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imgURL: req.body.imgURL
    }

    services.push(newService);
    // console.log(services);
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

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const serviceToUpdate = services.find(item => item.id === id);

    if (serviceToUpdate) {
        serviceToUpdate.title = req.body.title;
        serviceToUpdate.description = req.body.description;
        serviceToUpdate.price = req.body.price;
        serviceToUpdate.imgURL = req.body.imgURL;

        res.send(`Updated service ID: "${id}"`);
    } else {
        res.status(404).send(`Updated service ID: "${id}"`);
    }
});

module.exports = router;