import express, {json} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import delEditRoute from "./routers/del.edit.router.js";

const app = express();
app.use(json());
app.use(cors());

app.use(delEditRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => { 
    console.log(`Server listening on port ${port}`)
});