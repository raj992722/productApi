const mongoose=require('mongoose');
const ProductSchema=new mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    variants:[
        {
            name:String,
            sku:String,
            additional_cost:Number,
            stock_count:Number
        }
    ]
})

const Product=mongoose.model("Product",ProductSchema);


module.exports=Product;