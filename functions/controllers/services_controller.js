const services = require('../resources/services.json');
const crypto = require('crypto');

exports.create_service = (req, res) => {
  try {
    const newService = {
      id: crypto.randomUUID(),
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      imgURL: req.body.imgURL
    };
    services.push(newService);
    res.status(201).redirect('/');
  } catch (error) {
    res.status(500).send('Something went wrong');
  };
};

exports.get_all_services = (req, res) => {
  try {
    res.status(200).send(services);
  } catch (error) {
    res.status(500).send('Something went wrong');
  };
};

exports.put_service = (req, res) => {
  try {
    const id = req.params.id;
    const serviceToUpdate = services.find(item => item.id === id);

    if (serviceToUpdate) {
      serviceToUpdate.title = req.body.title;
      serviceToUpdate.description = req.body.description;
      serviceToUpdate.price = req.body.price;
      serviceToUpdate.imgURL = req.body.imgURL;

      res.status(200).send(`Updated service ID: "${id}"`);
    } else {
      res.status(404).send(`Service with id "${id}" was not found.`);
    }
  } catch (error) {
    res.status(500).send('Something went wrong');
  };
};

exports.delete_service = (req, res) => {
  try {
    const id = req.params.id;
    const serviceToDelete = services.find(service => service.id === id);
    const index = services.indexOf(serviceToDelete);

    if (index !== -1) {
      services.splice(index, 1);
      console.log('Deleted service: ' + id);
      res.status(204).send(`Service with id "${id}" was deleted.`);
    } else {
      res.status(404).send(`Service with id "${id}" was not found.`);
    }
  } catch (error) {
    res.status(500).send('Something went wrong');
  };
};
