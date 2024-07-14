// src/index.ts
import express from 'express';
import router from './router' ;
import config from "config";
require("../config/database.ts")

const app = express();

// Middlewares
app.use(express.json());
app.use('/', router);

const port: string = config.get("port")
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${ port }`);
});
