import express, { json } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';

import authRouter from './routers/authRouter.js';
import userRouter from './routers/userRouter.js';

dotenv.config();

import delEditRoute from "./routers/delEditRouter.js";

const app = express();
app.use(json());
app.use(cors());
app.use(helmet());
app.use(authRouter);
app.use(userRouter);
app.use(delEditRoute);


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
