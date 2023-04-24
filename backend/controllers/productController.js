const Product=require('../schema/productSchema')
exports.getProduct=async (req,res)=>{
    const products = await Product.find()
    res.json(products)
    
    // console.log(product)
}

exports.getProductByid=async (req,res)=>{
    const {id}=req.params
    const product=await Product.findById(id)
    res.json(product)

}

exports.createProduct=async (req,res)=>{

    // console.log(req.body)
    if(req.body){
        await Product.create(req.body)
        res.send("Data saved")
        // console.log("body is open")
    }
    else{
        res.send("request Not called")

    }
}
exports.updateProduct=async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndUpdate(id,req.body)
    res.json("Updated");

    //OR


    // const product = await Product.findById(id);
    // if (product) {
    //   await Product.updateOne({ _id: id },(req.body));
    //   res.json({
    //     message: "Data Updated"
    //   });
    // } else {
    //   res.json({
    //     message: "Data not updated"
    //   });
    // }
  }

  exports.deleteProduct=async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (product) {
      await Product.deleteOne({ _id: id });
      res.json({
        message: "Data Deleted"
      });
    } else {
      res.json({
        message: "Data not Deleted"
      });
    }
  }