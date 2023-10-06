const services = require('../resources/services.json');
const crypto = require('crypto');

exports.create_service = (req, res) => {
  const newService = {
    id: crypto.randomUUID(),
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    imgURL: req.body.imgURL
  };

  services.push(newService);
  res.redirect('/');
};

exports.get_all_services = (req, res) => {
  res.send(services);
};

exports.put_service = (req, res) => {
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
};

exports.delete_service = (req, res) => {
  const id = req.params.id;
  const serviceToDelete = services.find(service => service.id === id);
  const index = services.indexOf(serviceToDelete);

  if (index !== -1) {
    services.splice(index, 1);
    console.log('Deleted service: ' + id);
    res.send(`Service with id "${id}" was deleted.`);
  } else {
    res.status(404).send(`Service with id "${id}" was not found.`);
  }
};
