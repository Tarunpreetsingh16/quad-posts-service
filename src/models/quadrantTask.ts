import mongoose from "mongoose";
import { Task } from "../data/task";
const Schema = mongoose.Schema;

const TaskSchema = new Schema<Task>({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    xAxisPriority: {
        type: String,
        required: true
    },
    yAxisPriority: {
        type: String,
        required: true
    },
    deleted: {
        type: Boolean,
        required: true
    }
})

export const QuadrantTask =  mongoose.model('task', TaskSchema)
