import { Router } from 'express';
import processRequestParams from '../middlewares/processRequestParams.js';
import { postSchema, listPostSchema, checkNewPostsSchema } from '../schemas/timelineSchema.js';
import { tokenValidate } from '../middlewares/tokenValidate.js';
import { newPost, getPosts, checkNewPost } from '../controllers/timelineController.js';

const timelineRouter = Router();

timelineRouter.use(tokenValidate);

timelineRouter.get('/timeline', processRequestParams(listPostSchema), getPosts);
timelineRouter.post('/timeline', processRequestParams(postSchema), newPost);
timelineRouter.get('/timeline/posts/:lastPostCreatedAt', processRequestParams(checkNewPostsSchema), checkNewPost);

export default timelineRouter;
