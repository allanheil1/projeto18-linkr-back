import express, { json } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';

import authRouter from './routers/authRouter.js';
import userRouter from './routers/userRouter.js';
import delEditRoute from './routers/delEditRouter.js';
import timelineRouter from './routers/timelineRouter.js';
import likeRouter from "./routers/likeRouter.js";
import trendingRouter from './routers/trendingRouter.js';
import repostRouter from './routers/repostRouter.js';
import followRouter from './routers/followRouter.js';
import commentRouter from './routers/commentRouter.js';

dotenv.config();



const app = express();
app.use(json());
app.use(cors());
app.use(helmet());
app.use(authRouter);
app.use(userRouter);
app.use(likeRouter);
app.use(delEditRoute);
app.use(timelineRouter);
app.use(trendingRouter);




const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
