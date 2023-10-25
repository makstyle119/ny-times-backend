import axios from 'axios';
import { NY_TIMES_API_KEY } from '../config';
import { storiesResponse } from '../interfaces/stories';

export const getAllStoriesFromApi = async (): Promise<storiesResponse> => {
	const response = await axios.get(
		`https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${NY_TIMES_API_KEY}`
	);
	console.log('first');
	return response;
};
