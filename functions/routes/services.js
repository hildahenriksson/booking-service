const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/services_controller');

router.post("/", serviceController.create_service);

router.get("/", serviceController.get_all_services);

router.put("/:id", serviceController.put_service);

router.delete("/:id", serviceController.delete_service);

module.exports = router;
