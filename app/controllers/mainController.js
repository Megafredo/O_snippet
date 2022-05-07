//~ IMPORTATION 
const { User } = require('../models');
const { _500 } = require('./errorController');

module.exports = {

    async renderHome(req,res){
        try {

            const user = await User.findAll({
                order:['lastname']
            });

            // res.json(user)
            res.render('pages/home', {title: 'My Home Page', name : user[0].name})
        } catch(err) {
            _500(err,req,res);
        }


    }


}