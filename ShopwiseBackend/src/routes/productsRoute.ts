import { Router } from "express";
import { createProducts, getProducts, searchProducts } from "../controllers/productsControllers";

const router = Router()

router.post("/createproducts", createProducts)
router.get("/getproducts", getProducts)
router.get("/:Id", searchProducts)

export default router