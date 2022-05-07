//~ IMPORTATION MODULE
const { Router } = require('express');
const router = Router();

//* ROUTER
const mainRouter = require('./main');
router.use('/', mainRouter);

module.exports = router;