const express = require('express');
const router = express.Router();

const rootController = require('../controllers/root');

// populating the members and movies collections of the subscriptions db
router.get('/', rootController.add);

module.exports = router;
