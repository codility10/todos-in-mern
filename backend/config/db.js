const mongoose = require('mongoose');
const connectDb=()=>{
   var ac= mongoose.connect('mongodb://127.0.0.1/test')
    .then((con)=>{console.log(con) }).catch((e)=>console.log("error"+e))
    
}
module.exports=connectDb