//~ IMPORTATION MODULE
const { Router } = require('express');
const router = Router();

//* ROUTER

// ~ MAIN ROUTER 
const mainRouter = require('./main.js');
router.use(mainRouter);

// ~ USER ROUTER 
const mainUser = require('./user.js');
router.use(mainUser);



module.exports = router;