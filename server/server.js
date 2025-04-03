const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./index') ;

dotenv.config({ path: './config.env' })
app.listen(process.env.PORT, () => {
    console.log(`Listening To Port ${process.env.PORT}`);
})
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(conn => console.log('DB connected successfully')).catch(err => console.log('err ====> ', err))




