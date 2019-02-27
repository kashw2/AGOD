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
	let endpoint = `${apiEndpoint}?query=${query.search}&dateFrom=${query.dateFrom}&dateTo=${query.dateTo}&publisher=${
		query.publisher
	}&region=${query.region}&start=${query.start}&limit=${query.limit}`;

	if (query.dateFrom == '' || query.dateFrom == undefined) {
		endpoint = endpoint.replace('&dateFrom=undefined', '');
	}

	if (query.dateTo == '' || query.dateTo == undefined) {
		if (query.dateFrom == '' || query.dateFrom == undefined) {
			endpoint = endpoint.replace('&dateTo=undefined', '');
		} else {
			let date = new Date();

			query.dateTo = date.toUTCString(date.getTime());
		}
	}

	if (query.start == '' || query.start == undefined) {
		endpoint = endpoint.replace('&start=undefined', '');
	}

	if (query.limit == '' || query.limit == undefined) {
		endpoint = endpoint.replace('&limit=undefined', '');
	}

	if (query.publisher == '' || query.publisher == undefined) {
		endpoint = endpoint.replace('&publisher=undefined', '');
	}

	if (query.region == '' || query.region == undefined) {
		endpoint = endpoint.replace('&region=undefined', '');
	}

	return fetch(endpoint, {
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
