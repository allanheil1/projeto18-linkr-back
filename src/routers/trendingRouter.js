import { Router } from 'express'
import { getTrending, postTrending } from '../controllers/trendingController.js';

const trendingRouter = Router();

trendingRouter.post('/trending', postTrending)
trendingRouter.get('/trending', getTrending)

export default trendingRouter