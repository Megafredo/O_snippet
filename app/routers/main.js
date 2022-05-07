//~ IMPORTATION MODULE
const { Router } = require('express');
const router = Router();

const {renderHome} = require('../controllers/mainController')

//* MAIN ROUTER
router.get('/', renderHome);

module.exports = router;