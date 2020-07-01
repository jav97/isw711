const registerController={}
const  User=require('../models/User');
const bcrypt = require('bcrypt');
registerController.registerUser = async (req, res) => {
    try {
        const { name, lastname, email, address,username} = req.body;
        const password = bcrypt.hashSync(req.body.password,8);//este mae encrypta la contraseña
        const newUser = new User({ name, lastname, email, address,username,password});
        await newUser.save();
        res.status(200).json('New User added');
    } catch (error) {
        res.json(error);
    }
}

module.exports=registerController;