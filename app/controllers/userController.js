//~ IMPORTATION 
const { User } = require('../models');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');
const { _500 } = require('./errorController.js');
const assert = require('assert');




// // ?
// const passwordValidator = require('password-validator');
// const schema = new passwordValidator();

// schema
// .is().min(8)                                    // Minimum length 8
// .is().max(100)                                  // Maximum length 100
// .has().uppercase()                              // Must have uppercase letters
// .has().lowercase()                              // Must have lowercase letters
// .has().digits(2)                                // Must have at least 2 digits
// .has().not().spaces()                           // Should not have spaces
// .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values



module.exports = {

    //~ ------------------------------------------------------------------------------ PROFIL PAGE
    async renderProfilPage(req,res){ 
        try {

        
            res.render('pages/profil', {title: 'Ma page profil'})

        } catch(err) {
            _500(err,req,res);
        }
    },

    //~ ------------------------------------------------------------------------------ INSCRIPTION PAGE

    async signUp(req,res){ // inscription
        try {

            const { username, email, password, password_confirm } = req.body;

            // return res.json(body)
            const emailExist = await User.findOne({
                where : { email }
            })
           
            const usernameExist = await User.findOne({
                where : { username }
            })
           

            //! Utilisations des asserts pour affichés les errors

            //? Vérif username exist
            assert.ok(!Boolean(usernameExist), `Le nom d'utilisateur "${username}" existe déjà`);  
            //? Vérif mail exist
            assert.ok(!Boolean(emailExist), `L'utilisateur ${email} existe déjà`);
            //? Vérif mail valid
            assert.ok(emailValidator.validate(email), `${email} n'est pas un email valide.`)
            //? Vérif password
            assert.ok(password === password_confirm, `les mots de passe ne correspondent pas`);
            //? Vérif schéma password


            // ? Hashage du password et du passwordConfirm
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);

            //? on crée l'utilisateur
            await User.create({

                ...req.body,
                role_id : 2,
                password : hash

            });

            res.locals.signUpValid = 'Votre compte à bien été crée !'
            return res.render('pages/home', {title: 'Home'});
           
        } catch(err) {

            res.locals.error = err.message;
            return res.status(500).render('pages/home', {title: 'Home'});
          
        }
    },


    //~ ------------------------------------------------------------------------------ CONNEXION PAGE
    async signIn(req,res){ //connexion
        try {

            // ? RECUPERATION DES INFOS DU REQ BODY
            const {email_connexion, password_connexion} = req.body;



            const userExist = await User.findOne({
                where : {email : email_connexion}
            })
            
            console.log("userExist: ", userExist);


            res.redirect('/profil')
            
        
        } catch(err) {
            _500(err,req,res);
        }
    },


}