module.exports = {

    _400(req,res){
        res.status(400).send('Bad request');
    },

    _401(req,res){
        res.status(401).send(`Erreur d'authentification`);
    },

    _403(req,res){
        res.status(403).send('Accès non autorisé');
    },

    _404(req,res){
        res.status(404).render('pages/errors/404', { title : 'PAGE 404 NOT FOUND'});
    },

    _500(err, req,res){
        res.status(500).send(err.message);
    }
}
