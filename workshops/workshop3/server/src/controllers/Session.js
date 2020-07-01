const SessionController={};
const Session=require("../models/Session");
const User=require('../models/User');
var randtoken = require('rand-token');
SessionController.ckeckAuth=async(req,res,next)=>{
    try {
      const token = req.header("authorization");
      
      if(token){
            const session=await Session.findOne({token: token});
            if(session){
                next();
            }else{
                res.status(400).json("unauthorized token is required or invalid");
            }  
      }else{
          res.json("Authorization is required");
      }
     
    } catch (error) {
        res.json(error);
    }
}
SessionController.login=async(req,res)=>{
    try {
        const { username,password } = req.body;
         if(username==''&&password==''){
              res.status(422).json("Los valores Usuario y Contraseña son requeridos");
         }else{
            var now = new Date();
            var time = now.getTime();
            var expireTime = time + 1000*36000;
            now.setTime(expireTime);
            const newSession = new Session();
            const user_id=await User.findOne({username:username});
            newSession.user_id=user_id._id;
            newSession.username=user_id.username;
            newSession.password=user_id.password;
            newSession.expire_in=expireTime;
            newSession.created_at=new Date();
            newSession.token=randtoken.generate(256);
            await newSession.save();
           res.status(200).json(newSession);
         }
        
       } catch (error) {
           res.json(error);
       }
}
SessionController.logout=async(req,res)=>{
    try {
       const token=req.header("authorization");
       if(token){
        await Session.deleteOne({token:token});
        res.status(200).json("La session se cerro exitosamente");
       }else{
           res.json('token is required');
       }
       
    } catch (error) {
        
    }
}

module.exports=SessionController;
