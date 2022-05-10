//~ IMPORTATION MODULE
const { Router } = require('express');
const router = Router();

const { signUp, signIn, renderProfilPage } = require('../controllers/userController');

//* USER ROUTER

router.get('/profil', renderProfilPage);
router.post('/signin', signIn);
router.post('/signup', signUp);

module.exports = router;