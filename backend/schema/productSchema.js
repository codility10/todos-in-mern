const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  title: {
   type: String,
   required:[true,'please enter the valid input']

  },
  name: {
    type: String,
    required:[true,'please enter the valid input']
 
   },
  price: {
    type: Number,
    required:[true,'please enter the valid input']
 
   }
});

const Product = mongoose.model('product', productSchema);

module.exports = Product; 
