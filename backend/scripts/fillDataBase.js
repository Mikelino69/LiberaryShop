//import data from "../../frontend/src/data";
//import Product from "../models/productModel";
//const  mongoose = require("mongoose") 
//import dotenv = requirq"dotenv";
//const data = require("../data")
//const Product = require("../models/productModel")
import CategoryModel from "../models/categoryModel.js"
import data from "../data.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/productModel.js"

dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err.message);
  });

async function run (){
    await Product.collection.drop()
    for (const product of data.products){
        const result= new Product(product)
        await result.save()

    }
    await CategoryModel.collection.drop()
    for(const category of data.category){
      const result = new CategoryModel(category)
      await result.save()
    }

    console.log("success")

    process.exit()

}

run()


