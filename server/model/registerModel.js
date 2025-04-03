const mongoose = require('mongoose') ;

const userRegisterSchema = new mongoose.Schema({
     userName : {
         type : String ,
         required : true , 
     } ,   
     mail : {
        type : String ,
        required : true , 
        unique : true 
     }
})

const userRegisterModel = mongoose.model('users' , userRegisterSchema) ;
console.log('userRegisterModel ====> ' , userRegisterModel) ;
 
module.exports = userRegisterModel ; 