import express from "express";
import { FoodCategory } from "../../schemas/category-schema.js";
import {
  foodCategoryControllerCreate,
  foodCategoryControllerDelete,
  foodCategoryControllerReadAll,
  foodCategoryControllerUpdate,
} from "../../controllers/foodCategory/foodCategoryController.js";
const router = express.Router();

router.post("/post", foodCategoryControllerCreate);
router.get("/get", foodCategoryControllerReadAll);
router.put("/put", foodCategoryControllerUpdate);
router.delete("/delete", foodCategoryControllerDelete);
export default router;
