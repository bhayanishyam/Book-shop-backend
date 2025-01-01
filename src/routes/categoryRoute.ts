import express from 'express';
import { getAllCategory } from '../controller/categoryController';

const router = express.Router();

router.get("/all", getAllCategory)

//admin api
router.post("/",)
router.put("/:id", )
router.delete("/:id", )

export default router
