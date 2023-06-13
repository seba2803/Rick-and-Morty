const http = require('http');
const data = require('./utils/data');

http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {url} = req;

    if(url.includes('/rickandmorty/character')){

        console.log('se hizo una peticion');

        const id = url.slice(24);
        let obj;

        for(let i = 0; i < data.length; i++){
            if(data[i].id === parseInt(id)){
                obj = data[i];
            }
        }

        res.writeHead(200, {'Content-Type': 'application/json'});
        return res.end(JSON.stringify(obj));
    }

}).listen(3001,'localhost');