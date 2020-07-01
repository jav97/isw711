 const {Router}=require('express');
 const router=Router();

 const {login,logout} = require('../controllers/Session');
 router.route('/').post(login).delete(logout);
 module.exports=router;