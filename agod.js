// Dependencies
const fetch = require('node-fetch');

// Define the API endpoint
const apiEndpoint = 'https://www.data.gov.au/api/v0/search/datasets';

/**
 * GetAllData()
 *
 * Gets the latest dataset from the Australian Government's Open Data.
 *
 * @returns Promise for API data.
 *
 */
module.exports.GetAllData = () => {
	return fetch(apiEndpoint, {
		method: 'GET',
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		redirect: 'manual',
		referrer: 'no-referrer-when-downgrade'
	})
		.then((response) => response.json())
		.then((json) => {
			return json;
		})
		.catch((error) => console.error(error));
};

/**
 * GetDataset()
 *
 * Sends a GET request to the API
 *
 * @param {Object[]} query The query object.
 *
 * @returns Promise for API data.
 *
 */
module.exports.GetDataset = (query) => {
	if (query.dateFrom == '' || query.dateFrom == undefined) {
		query.dateFrom = '1975-01-31T14:00:00.000Z';
	}

	if (query.dateTo == '' || query.dateTo == undefined) {
		let date = new Date();

		query.dateTo = date.toUTCString(date.getTime());
	}

	if (query.start == '' || query.start == undefined) {
		query.start = '0';
	}

	if (query.limit == '' || query.limit == undefined) {
		query.limit = '10';
	}

	return fetch(
		`${apiEndpoint}?query=${query.search}&dateFrom=${query.dateFrom}&dateTo=${query.dateTo}&publisher=${query.publisher}&region=${
			query.region
		}&start=${query.start}&limit=${query.limit}`,
		{
			method: 'GET',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			redirect: 'manual',
			referrer: 'no-referrer-when-downgrade'
		}
	)
		.then((response) => response.json())
		.then((json) => {
			return json;
		})
		.catch((error) => console.error(error));
};

/**
 * GetDatasetByName()
 *
 * Sends a GET request to the API using a search query
 *
 * @param {String} name The string containing the search term.
 *
 * @returns Promise for API data.
 *
 */
module.exports.GetDatasetByName = (name) => {
	return fetch(`${apiEndpoint}?query=${name}`, {
		method: 'GET',
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		redirect: 'manual',
		referrer: 'no-referrer-when-downgrade'
	})
		.then((response) => response.json())
		.then((json) => {
			return json;
		})
		.catch((error) => console.error(error));
};

/**
 * GetDatasetByPublisher()
 *
 * Sends a GET request to the API using the name of the publisher as a parameter
 *
 * @param {String} publisher The string containing the publisher name term.
 *
 * @returns Promise for API data.
 *
 */
module.exports.GetDatasetByPublisher = (publisher) => {
	return fetch(`${apiEndpoint}?publisher=${publisher}`, {
		method: 'GET',
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		redirect: 'manual',
		referrer: 'no-referrer-when-downgrade'
	})
		.then((response) => response.json())
		.then((json) => {
			return json;
		})
		.catch((error) => console.error(error));
};
