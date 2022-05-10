//~ IMPORTATION 
const { User } = require('../models');
const { _500 } = require('./errorController.js');

module.exports = {

    async renderHome(req,res){
        try {

            
            
   
            res.render('pages/home', {title: 'My Home Page'})
        } catch(err) {
            _500(err,req,res);
        }

    }


}