const user = require('../utils/users');

const login = (req,res) => {
    const {email, password} = req.query;

    if(user[0].email === email && user[0].password === password){
        return res.status(200).json({access: true});
    }

        return res.status(404).json({access: false});
};

module.exports = login;