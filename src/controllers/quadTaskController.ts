import { Request, Response } from "express";
import { Task } from "../data/task";
import { quadTaskServiceAddTask, quadTaskServiceGetTasks } from "../service/quadTaskService";


const addTask = async (req: Request, res: Response) => {
    const task: Task = req.body;
    try {
        res.json(await quadTaskServiceAddTask(task));
    } catch (e: any) {
        res.status(500).json({
            "title": "Failed to add a task",
            "titleKey": "error.failed.add.task",
            "timestamp": new Date().toISOString(),
            "errors": [] 
        })
    }
} 

const getTasks = async (req: Request, res: Response) => {
    try {
        res.json(await quadTaskServiceGetTasks());
    } catch (e: any) {
        res.status(500).json({
            "title": "Failed to get tasks",
            "titleKey": "error.failed.get.tasks",
            "timestamp": new Date().toISOString(),
            "errors": [] 
        })
    }
}      

export { addTask, getTasks };
  