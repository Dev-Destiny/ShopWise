import { Router } from "express";
import { createProducts, getProducts } from "../controllers/productsControllers";

const router = Router()

router.post("/createproducts", createProducts)
router.get("/createproducts", getProducts)

export default router