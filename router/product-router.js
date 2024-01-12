const express=require('express');


const router=express.Router();

const {
create,
getProductByQuery
}= require('../controller/product-controller');



router.post('/',create);
router.get('/search',getProductByQuery);

module.exports=router;