const express=require('express');
const app=express();

const ProductRouter=require('./router/product-router');

var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB =process.env.MONGO_DB_URL || 'mongodb://127.0.0.1/productApi';
mongoose.connect(mongoDB, { useNewUrlParser: true });
 //Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));







const PORT= process.env.PORT || 3000;


app.use(express.json());


//Routes
app.use('/api/products',ProductRouter);



//Start server
app.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`);
})