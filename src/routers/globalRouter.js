import express from 'express';

const globalRouter = express.Router();
import { join } from '../controllers/userController';
import { trending } from '../controllers/videoController';

globalRouter.get('/', trending);
globalRouter.get('/join', join);

export default globalRouter;
