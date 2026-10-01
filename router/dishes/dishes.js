import express from "express";
import { Dishes } from "../../schemas/dishes-schema.js";
import {
  dishesControllerCreate,
  dishesControllerReadAll,
  dishesControllerUpdate,
  dishesControllerDelete,
} from "../../controllers/dishes/dishesController.js";
const router = express.Router();

router.post("/post", dishesControllerCreate);
router.get("/get", dishesControllerReadAll);
router.put("/put", dishesControllerUpdate);
router.delete("/delete", dishesControllerDelete);
export default router;
