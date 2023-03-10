import { Router } from 'express'
import { getTrending, postTrending,getHashtagPosts } from '../controllers/trendingController.js';
import { tokenValidate } from '../middlewares/tokenValidate.js';

const trendingRouter = Router();

trendingRouter.use(tokenValidate)

trendingRouter.post('/trending', postTrending)
trendingRouter.get('/trending', getTrending)

trendingRouter.get('/hashtag/:hashtag', getHashtagPosts)

export default trendingRouter