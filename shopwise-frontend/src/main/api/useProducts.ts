import { baseUrl, createproducts, getproducts, productsUrl } from "@/config/api";
import axios from "axios"
import type { Product } from "../types/productTypes";

function useProductsApi() {

    const getProducts = async (): Promise<Product[]> => {
        try {
            const products = await axios.get(`${baseUrl}${productsUrl}${getproducts}`)
            console.log(products.data)
            return products.data
        } catch (error) {
            console.log(error)
            return []
        }
    }

    const creatProducts = async (newProduct:Product) => {
        try {
            const response = await axios.post(`${baseUrl}${productsUrl}${createproducts}`, JSON.stringify(newProduct)) 
            console.log(response)
            return response
        } catch (error) {
            console.log(error)
        }
    }


    

	return {
        getProducts,
        creatProducts
    }
}

export default useProductsApi;
