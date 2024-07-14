import { Request, Response } from "express";
import { Task } from "../data/task";
import { QuadrantTask } from "../models/quadrantTask";

const addTask = async (req: Request, res: Response) => {
    const task: Task = req.body;
    try {
        const newTask = new QuadrantTask(task);
        
        await newTask.save();

        res.json({
            message: 'Task added successfully',
            task: newTask
        });
    } catch (e: any) {
        console.error(e)
    }
}      

export { addTask };
  