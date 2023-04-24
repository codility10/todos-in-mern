const express =require('express')
const router=express.Router();
const {getProduct,getProductByid,createProduct,updateProduct,deleteProduct}=require('../controllers/productController')
router.route('/products').get(getProduct)
router.route('/createProduct').post(createProduct)
router.route('/product/update/:id').put(updateProduct)
router.route('/product/delete/:id').delete(deleteProduct) 
router.route('/getProductByid/:id').get(getProductByid)


module.exports=router



