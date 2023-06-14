const http = require('http');
const getCharById = require('./controllers/getCharById');

http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {url} = req;

    if(url.includes('/rickandmorty/character')){

        console.log('se hizo una peticion');

        const id = url.slice(24);
        
        getCharById(res,id);
    }

}).listen(3001,'localhost');