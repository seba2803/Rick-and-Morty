// controladores
const getCharById = require('../controllers/getCharById');
const {postFav, deleteFav} = require('../controllers/handleFavorites');
const login = require('../controllers/login');
//Routes
const express = require('express');
const routeControl = express.Router();

routeControl.get('/character/:id', (req,res) => {
    getCharById(req,res);
});

routeControl.get('/login', (req,res) => {
    login(req,res);
});

routeControl.post('/fav', (req,res) => {
    postFav(req,res);
});

routeControl.delete('/fav/:id', (req,res) => {
    deleteFav(req,res);
});

module.exports = routeControl;
