import { Router } from 'express';
import processRequestParams from '../middlewares/processRequestParams.js';
import { postSchema } from '../schemas/timelineSchema.js';
import { newPost } from '../controllers/timelineController.js';

const timelineRouter = Router();

timelineRouter.get('/timeline');
timelineRouter.post('/timeline', processRequestParams(postSchema), newPost);
timelineRouter.put('/timeline');
timelineRouter.delete('/timeline');
