import express from 'express';
import { getAllStoriesFromApi } from '../services/stories';
import { storiesResponse } from '../interfaces/stories';

export const getAll = async (req: express.Request, res: express.Response) => {
	const { data: results }: storiesResponse = await getAllStoriesFromApi();
	return res.status(200).json(results);
};
