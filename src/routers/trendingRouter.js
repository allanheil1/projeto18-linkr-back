import { Router } from 'express'
import { getTrending } from '../controllers/trendingController';

const trendingRouter = Router();

trendingRouter.get('/trending', getTrending)