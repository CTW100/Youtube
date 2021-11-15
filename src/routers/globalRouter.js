import express from 'express';

const globalRouter = express.Router();
import { join, login } from '../controllers/userController';
import { trending, search } from '../controllers/videoController';

globalRouter.get('/', trending);
globalRouter.get('/join', join);
globalRouter.get('/login', login);
globalRouter.get('/search', search);

export default globalRouter;
