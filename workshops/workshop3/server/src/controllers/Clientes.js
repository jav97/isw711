const clientesController={};
const Clientes=require('../models/Clientes');

clientesController.getClientes=async(req,res)=>{
    const clientes = await  Clientes.find();
     res.status(200).json(clientes);
}
clientesController.createClientes=async(req,res)=>{
    const cliente= new Clientes();
    cliente.name="paco";
    cliente.lastname="rojas";
    cliente.phone=12345678;
    await cliente.save();
    res.status(200).json('New Client added');
}



module.exports=clientesController;