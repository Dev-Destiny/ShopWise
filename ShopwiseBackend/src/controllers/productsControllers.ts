import { Request, Response } from "express";
import { IProducts, Product } from "../models/productsSchema.ts";

export async function createProducts (req:Request,res: Response){
    try {
         const {title, description, image,price } = req.body
         const newProduct:IProducts ={
            image,
            title,
            description,
            price,
         }

         const products = await Product.create(newProduct)
         res.status(201).json({
            messgae:"Product Successfully Created",
            data:products
         })
    } catch (error) {
        res.status(400).json({
            message:"Failed to create product"
        })
    }
}
export async function getProducts (req:Request,res: Response){

}