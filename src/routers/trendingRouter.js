import { Router } from 'express'
import { getTrending, postTrending,getHashtagPosts } from '../controllers/trendingController.js';

const trendingRouter = Router();

trendingRouter.post('/trending', postTrending)
trendingRouter.get('/trending', getTrending)

trendingRouter.get('/hashtag/:hashtag', getHashtagPosts)

export default trendingRouter