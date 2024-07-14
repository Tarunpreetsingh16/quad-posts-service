import config from "config";
import mongoose from "mongoose";

const db: string = config.get('mongoURI');

mongoose.connect(db)
    .then(() => console.log("MongoDB connected..."))
    .catch(error => console.error(error))
