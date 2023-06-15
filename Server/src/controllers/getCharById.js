const axios = require('axios');

const URL = "https://rickandmortyapi.com/api/character";

const getCharById = (req,res) => {
    const {id} = req.params;

    axios.get(`${URL}/${id}`)

    .then(({data}) => {

        if(!data.name){
            
            return res.status(404).send('Not found');

        }

       return res.status(200).json({id: data.id,  status: data.status, name: data.name, species: data.species, origin: data.origin, image: data.image, gender: data.gender})}
    )
    .catch(error => res.status(500).send(error.message));
};

module.exports = getCharById;