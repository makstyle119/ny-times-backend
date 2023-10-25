import express from 'express';
import { getAll } from '../controllers/stories';
import apicache from 'apicache';

const router = express.Router();
let cache = apicache.middleware;

export default (router: express.Router) => {
	return router.get('/stories', cache('5 minutes'), getAll);
};
