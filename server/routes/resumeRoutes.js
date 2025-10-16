import express from "express";
import protect from "../middlewares/authMiddleware.js";
import { analyseResume, createResume, deleteResume, getPublicResumeById, getResumeById, updateResume } from "../controllers/resumeController.js";
import upload from "../configs/multer.js";

const resumeRouter = express.Router();

resumeRouter.post('/create', protect, createResume)
resumeRouter.put('/update', upload.single('image'), protect, updateResume)
resumeRouter.delete('/delete/:resumeId', protect, deleteResume)
resumeRouter.get('/get/:resumeId', protect, getResumeById)
resumeRouter.post('/public/:resumeId', getPublicResumeById)
resumeRouter.post('/analyse/:resumeId', analyseResume)




export default resumeRouter;

