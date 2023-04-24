// const bodyParser = require('body-parser')
const express =require('express')
const app=express()
const connectDb=require('./config/db')
// const Product = require('./schema/productSchema')
var bodyParser=require("body-parser")
const productRoute=require('./routes/productRoute')

connectDb();
app.use(bodyParser.json())
app.use('/',productRoute);    // route mounting
// app.get('/products', getProduct)
// app.post('/createProduct' , createProduct)
// app.put('/product/update/:id', updateProduct);
// app.delete('/product/delete/:id',deleteProduct );
  




app.listen(8000,()=>{
    console.log("server Started on port 8000")
})