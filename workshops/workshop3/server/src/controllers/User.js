const UserController = {};
const User = require('../models/User');

UserController.getUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
}
UserController.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.json(error);
    }
}
UserController.deleteUser = async (req, res) => {
    try {
         await User.findByIdAndDelete(req.params.id);
         res.json('User is Deleted');
    } catch (error) {
        res.json(error);
    }
}
UserController.updateUser = async (req, res) => {
      try {
            const {name,lastname,email,address}=req.body;
            await User.findByIdAndUpdate(req.params.id,{name,lastname,email,address});
            res.status(400).json('User updated');
      } catch (error) {
           res.json(error);
      }
}

module.exports = UserController;