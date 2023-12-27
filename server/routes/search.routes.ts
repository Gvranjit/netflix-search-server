import express from "express";
import {
  indexController,
  searchController,
} from "../controllers/search.controller";
const router = express.Router();
router.get("/", indexController);
router.get("/search", searchController);
export default router;
