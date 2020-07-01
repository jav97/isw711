const {Schema,model}=require('mongoose');

const clienteSchema=new Schema({
     name:{
         type:String,
         required:true
     },
     lastname:{
         type:String,
         required:true
     },
     phone:{
         type:Number,
         required:true
     }
});

module.exports=model('Clientes',clienteSchema);