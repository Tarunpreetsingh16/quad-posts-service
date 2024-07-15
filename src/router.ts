import express from "express";
import { addTask } from "./controllers/quadTaskController";

const router = express.Router();

router.use((req, res, next) => {
    next();
});


router.post('/task', async (req, res, next) => {
    try {
        await addTask(req, res);
    }
    catch(error) {
        next(error);
    }
});

export default router;
