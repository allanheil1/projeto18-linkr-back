import { Router } from 'express';
import processRequestParams from '../middlewares/processRequestParams.js';
import { postSchema, listPostSchema } from '../schemas/timelineSchema.js';
import { tokenValidate } from '../middlewares/tokenValidate.js';
import { newPost, getPosts } from '../controllers/timelineController.js';

const timelineRouter = Router();

// timelineRouter.use(tokenValidate)

timelineRouter.get('/timeline', processRequestParams(listPostSchema), getPosts);
timelineRouter.post('/timeline', processRequestParams(postSchema), newPost);

export default timelineRouter