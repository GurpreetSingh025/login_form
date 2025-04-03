const express = require('express') ;
const cors = require('cors') ;
const userRoutes = require('./routes/userRegisterRoutes') ;

const app = express() ;
app.use(express.json()) ;
app.use(cors()) ;

app.use('/api/v1/users' , userRoutes) ;
module.exports = app ;


