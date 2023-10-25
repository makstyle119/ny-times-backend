export interface multimedia {
	url: string;
	format: string;
	height: number;
	width: number;
	type: string;
	subtype: string;
	caption: string;
	copyright: string;
}

export interface story {
	section: string;
	subsection: string;
	title: string;
	abstract: string;
	url: string;
	byline: string;
	item_type: string;
	published_date: string;
	multimedia: multimedia[];
	short_url: '';
}

export interface storiesResponse {
	data: {
		status: string;
		section: string;
		last_updated: string;
		num_results: number;
		results: story[];
	};
}
