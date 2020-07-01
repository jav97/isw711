const {Router}=require('express');
const router=Router();

const {registerUser}=require('../controllers/Register');

router.route('/').post(registerUser);

module.exports=router;