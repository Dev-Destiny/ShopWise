import { Router } from "express";
import { 
  createProducts, 
  getProducts, 
  searchProducts, 
  updateProduct, 
  deleteProduct 
} from "../controllers/productsControllers";

const router = Router();

router.post("/", createProducts);              
router.get("/", getProducts);                  
router.get("/:id", searchProducts);            
router.put("/:id", updateProduct);             
router.delete("/:id", deleteProduct);          

export default router;