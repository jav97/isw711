const {Schema,model}=require('mongoose');

const UserSchama=new Schema({
    name:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true,
    },
     email:{
         type:String,
         required:true,
         unique: true,
     },
     address:{
          type:String,
          required:true
     },
     username:{
          type:String,
          required:true,
          unique: true,
     },
     password:{
          type:String,
          required:true
     },
});

module.exports=model('User',UserSchama);