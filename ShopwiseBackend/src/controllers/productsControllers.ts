import { Request, Response } from "express";
import { IProducts, Product } from "../models/productsSchema.ts";

export async function createProducts (req:Request,res: Response){
    try {
         const {title, description, image,price,rating } = req.body
         const newProduct:IProducts ={
            image,
            title,
            description,
            price,
            rating,
         }

         const smaeTitle = await Product.findOne({title})

         if (smaeTitle){
         return  res.status(400).json({
                Message:"Products already Exists"
            })
         }
         const products = await Product.create(newProduct)


         res.status(201).json({
            messgae:"Product Successfully Created",
            data:products
         })
    } catch (error) {
       return res.status(400).json({
            message:"Failed to create product"
        })
    }
}
export const getProducts = async (req:Request,res:Response) =>{
    try {
        const products = await Product.find().limit(50)
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({
            message:"Error getting product"
        })
    }
}

export const searchProducts = async (req:Request,res:Response) =>{

    try {
        const p = await Product.findById(req.params.id)
        res.status(200).json(p)
    } catch (error) {
        res.status(404).json({
            message:"Not found"
        })
    }
}
