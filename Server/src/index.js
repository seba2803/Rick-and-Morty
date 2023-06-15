const express = require('express');
const routes = require('./routes/index');

const server = express();

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 //middleware que permite usar put,post
 server.use(express.json());

 //middleware que permite modularizar rutas con un path /rickandmorty
 server.use('/rickandmorty', routes);

const PORT = 3001;


server.listen(PORT, ()=> console.log('Server raised in port: ' + PORT));