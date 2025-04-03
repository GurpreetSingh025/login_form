const userRegisterModel = require('../model/registerModel') ;
exports.getAllUsers = async (req , res) => {
     try{
        const allUsers = await userRegisterModel.find() ;
        return res.status(200).json({
             status : 'success' ,
             data : allUsers
        })
     }catch(err){
        console.log('err ====> ' , err) ;
        return res.status(404).json({
            status : 'fail' ,
            message : 'Failed to get users'
       })
     }
}
exports.isDataEmpty = async (req , res , next) => {
    try{
        const data = await userRegisterModel.find() ;
        if(data.length == 0){
            return res.status(200).json({
                status : 'fail' ,
                message : 'No user found'
            })
        }
    }catch(err){
        console.log('err ====> ' , err)
    }
} 
exports.checkUser = (req , res , next) => {
    try{
        if(!req || !req.body || !req.body.userName.trim() || !req.body.mail.trim()){
             return res.status(400).json({
                  status : 'fail' ,
                  message : 'Invalid user information' 
             })
        }
        next() ;
    }catch(err){
        console.log('err ====> ' , err)
        return res.status(400).json({
            status : 'fail' ,
            message : 'Invalid user information' 
        })
    }
}
exports.registerUser = async (req , res) => {
    try{
       const newUser = await userRegisterModel.create(req.body) ;
       return res.status(201).json({
           status : 'success' ,
           data : newUser  
       })
    }catch(err){        
       console.log('err ====> ' , err) ;
       return res.status(400).json({
            status : 'fail' ,
            message : 'Failed to register user'
       })
    }
}

