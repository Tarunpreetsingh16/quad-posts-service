import { Request, Response } from "express";
import { Task } from "../data/task";
import { QuadrantTask } from "../models/quadrantTask";

const addTask = async (req: Request, res: Response) => {
    const task: Task = req.body;
    try {

        const tasks = await QuadrantTask.find();
        const newTask = new QuadrantTask(task);

        if (!tasks) {
            newTask.id = 0;
        } else {
            const maxIndex = tasks.reduce((maxTillNow: number, task: Task) => {
                return Math.max(maxTillNow, task.id)
            }, 0)
            newTask.id = maxIndex + 1
        }
        
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
  