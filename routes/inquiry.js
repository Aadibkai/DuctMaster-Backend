import express from "express";
import { getAllInquiries, submitInquiry } from "../controllers/inquiry.js";

const router = express.Router();

router.post("/submitinquiry", submitInquiry);
router.get("/all", getAllInquiries); 

export default router;
