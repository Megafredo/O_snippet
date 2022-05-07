//~ DOTENV
require('dotenv').config();

//~ MODULES IMPORTATION
const express = require('express');
const app = express();
const session = require('express-session');
const { _404 } = require('./app/controllers/errorController');
const router = require('./app/routers/')

//~ URL ENCODED
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

//~ SESSION
app.use(session({
    saveUninitialized : true,
    resave: true,
    secret: process.env.SESSION_SECRET,
}));

//~ MOTEUR EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views')

//~ STATICS
app.use('/', express.static(__dirname + '/assets'));

//* ROUTER
app.use(router);
//* ERROR
app.use(_404);
//~ SERVER
const PORT = process.env.PORT || 9000;

app.listen(PORT, ()=>{
    console.log(`Start server on http://localhost:${PORT}`);
});