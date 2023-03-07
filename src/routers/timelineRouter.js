import { Router } from 'express';
import processRequestParams from '../middlewares/processRequestParams.js';
import { postSchema, listPostSchema } from '../schemas/timelineSchema.js';
import { newPost, getPosts } from '../controllers/timelineController.js';

const timelineRouter = Router();

timelineRouter.get('/timeline', processRequestParams(listPostSchema), getPosts);
timelineRouter.post('/timeline', processRequestParams(postSchema), newPost);
timelineRouter.put('/timeline');
timelineRouter.delete('/timeline');
