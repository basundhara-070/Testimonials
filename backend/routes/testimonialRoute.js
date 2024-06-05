import { getAllTestimonials } from "../controllers/testimonialCont.js";
import express from 'express';
const router = express.Router();
router.get('/', getAllTestimonials);  
export default router;
