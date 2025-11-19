import { Request, Response } from "express";
import { IProducts, Product } from "../models/productsSchema.ts";

//Create Product
export async function createProducts(req: Request, res: Response) {
	try {
		const { title, description, image, price, rating, star } = req.body;
		const newProduct: IProducts = {
			image,
			title,
			description,
			price,
			rating,
			star,
		};

		const smaeTitle = await Product.findOne({ title });

		if (smaeTitle) {
			return res.status(400).json({
				Message: "Products already Exists",
			});
		}
		const products = await Product.create(newProduct);

		res.status(201).json({
			messgae: "Product Successfully Created",
			data: products,
		});
	} catch (error) {
		return res.status(400).json({
			message: "Failed to create product",
		});
	}
}

//Get all products
export const getProducts = async (req: Request, res: Response) => {
	try {
		const products = await Product.find().limit(50);
		res.status(200).json(products);
	} catch (error) {
		res.status(400).json({
			message: "Error getting product",
		});
	}
};

//Get products Using Id
export const searchProducts = async (req: Request, res: Response) => {
	try {
		const p = await Product.findById(req.params.id);
		res.status(200).json(p);
	} catch (error) {
		res.status(404).json({
			message: "Not found",
		});
	}
};

//Update Product
export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updated = await Product.findByIdAndUpdate(id, updates, {
      new: true,        // return updated version
      runValidators: true,
    });

    if (!updated) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

   return res.status(200).json({
      message: "Product updated successfully",
      product: updated,
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error,
    });
  }
};

//Delete Product
export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deleted = await Product.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

   return res.status(200).json({
      message: "Product deleted successfully",
    });

  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error,
    });
  }
};