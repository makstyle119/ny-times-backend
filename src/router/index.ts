import express from 'express';
import stories from './stories';

const router = express.Router();

export default (): express.Router => {
	stories(router);
	return router;
};
