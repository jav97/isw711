const {Router}=require('express');
const router=Router();

const{getClientes,createClientes}=require('../controllers/Clientes');

router.route('/').get(getClientes).post(createClientes);

module.exports=router;