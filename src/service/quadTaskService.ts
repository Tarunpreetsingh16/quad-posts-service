import { Task } from "../data/task";
import { QuadrantTask } from "../models/quadrantTask";

const addTask = async (task: Task): Promise<Task> => {
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
        
        return await newTask.save();
    }
    catch(e: any) {
        console.error("AddTask(): Error =", e.message)
        throw e;
    }
}

const getTasks = async (): Promise<Array<Task>> => {
    try {
        return await QuadrantTask.find();        
    }
    catch(e: any) {
        console.error("GetTasks(): Error =", e.message)
        throw e;
    }
}

export {addTask as quadTaskServiceAddTask, getTasks as quadTaskServiceGetTasks}
