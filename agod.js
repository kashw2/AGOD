// Dependencies
const fetch = require('node-fetch');

// Define the API endpoint
const apiEndpoint = 'https://www.data.gov.au/api/v0/search/datasets';

// Retrieving Dataset Functionality

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
 * Sends a GET request to the API.
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
 * Sends a GET request to the API using a search query.
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
 * Sends a GET request to the API using the name of the publisher as a parameter.
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

// Sorting Functionality

/**
 * GetDatasetCatalogs()
 *
 * Returns dataset catalog attributes in a given collection/array.
 *
 * @param {Object[]} collection A collection/array of Datasets.
 *
 * @returns An array containing the catalogs of the Datasets.
 *
 */
module.exports.GetDatasetCatalogs = (collection) => {
	let datasetCatalogs = [];

	collection.dataSets.forEach((item) => {
		datasetCatalogs.push(item.catalog);
	});

	return datasetCatalogs;
};

/**
 * GetDatasetContacts()
 *
 * Returns dataset contact attributes in a given collection/array.
 *
 * @param {Object[]} collection A collection/array of Datasets.
 *
 * @returns An array containing the contacts of the Datasets.
 *
 */
module.exports.GetDatasetContacts = (collection) => {
	let datasetContacts = [];

	collection.dataSets.forEach((item) => {
		datasetContacts.push(item.contact);
	});

	return datasetContacts;
};

/**
 * GetDatasetCreationDates()
 *
 * Returns dataset creation attributes in a given collection/array.
 *
 * @param {Object[]} collection A collection/array of Datasets.
 *
 * @returns An array containing the creations of the Datasets.
 *
 */
module.exports.GetDatasetCreationDates = (collection) => {
	let datasetCreationDates = [];

	collection.dataSets.forEach((item) => {
		datasetCreationDates.push(item.creation);
	});

	return datasetCreationDates;
};

/**
 * GetDatasetDescriptions()
 *
 * Returns dataset description attributes in a given collection/array.
 *
 * @param {Object[]} collection A collection/array of Datasets.
 *
 * @returns An array containing the descriptions of the Datasets.
 *
 */
module.exports.GetDatasetDescriptions = (collection) => {
	let datasetDescriptions = [];

	collection.dataSets.forEach((item) => {
		datasetDescriptions.push(item.description);
	});

	return datasetDescriptions;
};

/**
 * GetDatasetIdentifiers()
 *
 * Returns dataset identifer attributes in a given collection/array.
 *
 * @param {Object[]} collection A collection/array of Datasets.
 *
 * @returns An array containing the identifers of the Datasets.
 *
 */
module.exports.GetDatasetIdentifiers = (collection) => {
	let datasetIdentifiers = [];

	collection.dataSets.forEach((item) => {
		datasetIdentifiers.push(item.identifer);
	});

	return datasetIdentifiers;
};

/**
 * GetDatasetDatesOfIssue()
 *
 * Returns dataset issued attributes in a given collection/array.
 *
 * @param {Object[]} collection A collection/array of Datasets.
 *
 * @returns An array containing the date of issue for the Datasets.
 *
 */
module.exports.GetDatasetDatesOfIssue = (collection) => {
	let datasetIssueds = [];

	collection.dataSets.forEach((item) => {
		datasetIssueds.push(item.issued);
	});

	return datasetIssueds;
};

/**
 * GetDatasetLandingPage()
 *
 * Returns dataset landing page attributes in a given collection/array.
 *
 * @param {Object[]} collection A collection/array of Datasets.
 *
 * @returns An array containing the landing pages of the Datasets.
 *
 */
module.exports.GetDatasetLandingPage = (collection) => {
	let datasetLandingPages = [];

	collection.dataSets.forEach((item) => {
		datasetLandingPages.push(item.landingPage);
	});

	return datasetLandingPages;
};

/**
 * GetDatasetModificationDates()
 *
 * Returns dataset modification attributes in a given collection/array.
 *
 * @param {Object[]} collection A collection/array of Datasets.
 *
 * @returns An array containing the modification datess of the Datasets.
 *
 */
module.exports.GetDatasetModificationDates = (collection) => {
	let datasetModificationDates = [];

	collection.dataSets.forEach((item) => {
		datasetModificationDates.push(item.modified);
	});

	return datasetModificationDates;
};

/**
 * GetDatasetQualities()
 *
 * Returns dataset quality attributes in a given collection/array.
 *
 * @param {Object[]} collection A collection/array of Datasets.
 *
 * @returns An array containing the qualities of the Datasets.
 *
 */
module.exports.GetDatasetQualities = (collection) => {
	let datasetQualities = [];

	collection.dataSets.forEach((item) => {
		datasetQualities.push(item.quality);
	});

	return datasetQualities;
};

/**
 * GetDatasetScores()
 *
 * Returns dataset score attributes in a given collection/array.
 *
 * @param {Object[]} collection A collection/array of Datasets.
 *
 * @returns An array containing the scores of the Datasets.
 *
 */
module.exports.GetDatasetScores = (collection) => {
	let datasetScores = [];

	collection.dataSets.forEach((item) => {
		datasetScores.push(item.score);
	});

	return datasetScores;
};

/**
 * GetDatasetTitles()
 *
 * Returns dataset title attributes in a given collection/array.
 *
 * @param {Object[]} collection A collection/array of Datasets.
 *
 * @returns An array containing the titles of the Datasets.
 *
 */
module.exports.GetDatasetTitles = (collection) => {
	let datasetTitles = [];

	collection.dataSets.forEach((item) => {
		datasetTitles.push(item.title);
	});

	return datasetTitles;
};

/**
 * GetDatasetYears()
 *
 * Returns dataset year attributes in a given collection/array.
 *
 * @param {Object[]} collection A collection/array of Datasets.
 *
 * @returns An array containing the years of the Datasets.
 *
 */
module.exports.GetDatasetYears = (collection) => {
	let datasetYears = [];

	collection.dataSets.forEach((item) => {
		datasetYears.push(item.years);
	});

	return datasetYears;
};
