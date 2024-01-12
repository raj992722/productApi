const Product =require('../model/Product');



const create=async (req,res)=>{
        try {
          const product =await Product.create(req.body);
          res.status(201).json(product);  
        } catch (error) {
            res.status(500).json({error:"Internal server error."});
        }
};

const getProductByQuery=async (req,res)=>{
    try {
        const {query}=req.query;
        if(!query){
            return res.status(400).json({error:"Bad request or query parameter is missing"});
        }
        const results=await Product.find({
            $or:[
                {name:{$regex:query,$options:"i"}},
                {description:{$regex:query,$options:"i"}},
                {'variants.name':{$regex:query,$options:"i"}}
            ]
        });
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({error:"Internal server error"});
    }
};

module.exports={
    create,
    getProductByQuery
}