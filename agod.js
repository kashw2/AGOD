// Dependencies
const fetch = require('node-fetch');

// Define the API endpoint
const apiEndpoint = 'https://www.data.gov.au/api/v0/search/datasets';

class Data {
	/**
	 * GetAllData()
	 *
	 * Gets the latest dataset from the Australian Government's Open Data.
	 *
	 * @returns Promise for API data.
	 *
	 */
	GetAllData() {
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
	}

	/**
	 * GetData()
	 *
	 * Sends a GET request to the API.
	 *
	 * @param {Object[]} query The query object.
	 *
	 * @returns Promise for API data.
	 *
	 */
	GetData(query) {
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
	}

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
	GetDatasetByName(name) {
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
	}

	/**
	 * GetDatasetByDate()
	 *
	 * Sends a GET request to the API using the dateFrom and dateTo query fields/parameters.
	 *
	 * @param {String} dateFrom The string containing the start date of the datasets.
	 * @param {String} dateTo The string containing the end date of the datasets.
	 *
	 * @returns Promise for API data.
	 *
	 */
	GetDatasetByDate(dateFrom, dateTo) {
		return fetch(`${apiEndpoint}?dateFrom=${dateFrom}&dateTo=${dateTo}`, {
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
	}

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
	GetDatasetByPublisher(publisher) {
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
	}

	/**
	 * GetDatasetByRegion()
	 *
	 * Sends a GET request to the API using the region query fields/parameters.
	 *
	 * @param {String} region The string containing the region of the data.
	 *
	 * @returns Promise for API data.
	 *
	 */
	GetDatasetByRegion(region) {
		return fetch(`${apiEndpoint}?region=${region}`, {
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
	}
}

module.exports.Data = new Data();

class Dataset {
	/**
	 * GetDatasetCataloger()
	 *
	 * Returns dataset catalog attributes in a given collection/array.
	 *
	 * @param {Object[]} collection A collection/array of Datasets.
	 *
	 * @returns An array containing the catalogs of the Datasets.
	 *
	 */
	GetDatasetCatalogers(collection) {
		let datasetCatalogs = [];

		collection.dataSets.forEach((item) => {
			datasetCatalogs.push(item.catalog);
		});

		return datasetCatalogs;
	}

	/**
	 * GetDatasetContactPoints()
	 *
	 * Returns dataset contactPoint attributes in a given collection/array.
	 *
	 * @param {Object[]} collection A collection/array of Datasets.
	 *
	 * @returns An array containing the contact points of the Datasets.
	 *
	 */
	GetDatasetContactPoints(collection) {
		let datasetContacts = [];

		collection.dataSets.forEach((item) => {
			datasetContacts.push(item.contactPoint);
		});

		return datasetContacts;
	}

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
	GetDatasetCreationDates(collection) {
		let datasetCreationDates = [];

		collection.dataSets.forEach((item) => {
			datasetCreationDates.push(item.creation);
		});

		return datasetCreationDates;
	}

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
	GetDatasetDescriptions(collection) {
		let datasetDescriptions = [];

		collection.dataSets.forEach((item) => {
			datasetDescriptions.push(item.description);
		});

		return datasetDescriptions;
	}

	/**
	 * GetDatasetHasQualities()
	 *
	 * Returns dataset hasQuality attributes in a given collection/array.
	 *
	 * @param {Object[]} collection A collection/array of Datasets.
	 *
	 * @returns An array containing the boolean hasQualities of the Datasets.
	 *
	 */
	GetDatasetHasQualities(collection) {
		let datasetQualities = [];

		collection.dataSets.forEach((item) => {
			datasetQualities.push(item.hasQuality);
		});

		return datasetQualities;
	}

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
	GetDatasetIdentifiers(collection) {
		let datasetIdentifiers = [];

		collection.dataSets.forEach((item) => {
			datasetIdentifiers.push(item.identifer);
		});

		return datasetIdentifiers;
	}

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
	GetDatasetDatesOfIssue(collection) {
		let datasetIssueds = [];

		collection.dataSets.forEach((item) => {
			datasetIssueds.push(item.issued);
		});

		return datasetIssueds;
	}

	/**
	 * GetDatasetLandingPages()
	 *
	 * Returns dataset landing page attributes in a given collection/array.
	 *
	 * @param {Object[]} collection A collection/array of Datasets.
	 *
	 * @returns An array containing the landing pages of the Datasets.
	 *
	 */
	GetDatasetLandingPages(collection) {
		let datasetLandingPages = [];

		collection.dataSets.forEach((item) => {
			datasetLandingPages.push(item.landingPage);
		});

		return datasetLandingPages;
	}

	/**
	 * GetDatasetModificationDates()
	 *
	 * Returns dataset modification attributes in a given collection/array.
	 *
	 * @param {Object[]} collection A collection/array of Datasets.
	 *
	 * @returns An array containing the modification dates of the Datasets.
	 *
	 */
	GetDatasetModificationDates(collection) {
		let datasetModificationDates = [];

		collection.dataSets.forEach((item) => {
			datasetModificationDates.push(item.modified);
		});

		return datasetModificationDates;
	}

	/**
	 * GetDatasetPublishers()
	 *
	 * Returns dataset publisher attributes in a given collection/array.
	 *
	 * @param {Object[]} collection A collection/array of Datasets.
	 *
	 * @returns An array containing the publisher of the Datasets.
	 *
	 */
	GetDatasetPublishers(collection) {
		let datasetPublishers = [];

		collection.dataSets.forEach((item) => {
			datasetPublishers.push(item.publisher);
		});

		return datasetPublishers;
	}

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
	GetDatasetQualities(collection) {
		let datasetQualities = [];

		collection.dataSets.forEach((item) => {
			datasetQualities.push(item.quality);
		});

		return datasetQualities;
	}

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
	GetDatasetScores(collection) {
		let datasetScores = [];

		collection.dataSets.forEach((item) => {
			datasetScores.push(item.score);
		});

		return datasetScores;
	}

	/**
	 * GetDatasetTemporal()
	 *
	 * Returns dataset temporal attributes in a given collection/array.
	 *
	 * @param {Object[]} collection A collection/array of Datasets.
	 *
	 * @returns An array containing the temporals of the Datasets.
	 *
	 */
	GetDatasetTemporal(collection) {
		let datasetTemporals = [];

		collection.dataSets.forEach((item) => {
			datasetTemporals.push(item.temporal);
			datasetTemporals.push(item.temporal);
			datasetTemporals.push(item.temporal);
			datasetTemporals.push(item.temporal);
		});

		return datasetTemporals;
	}

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
	GetDatasetTitles(collection) {
		let datasetTitles = [];

		collection.dataSets.forEach((item) => {
			datasetTitles.push(item.title);
		});

		return datasetTitles;
	}

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
	GetDatasetYears(collection) {
		let datasetYears = [];

		collection.dataSets.forEach((item) => {
			datasetYears.push(item.years);
		});

		return datasetYears;
	}
}

module.exports.Dataset = new Dataset();

class Facets {
	/**
	 * GetFacets()
	 *
	 * Returns facets in a given collection/array.
	 *
	 * @param {Object[]} collection The collection/array that contains data returned by GetAllData() or GetData().
	 *
	 * @returns An array containing the facets of the collection/array.
	 *
	 */
	GetFacets(collection) {
		let facetsArray = [];

		collection.facets.forEach((item) => {
			facetsArray.push(item);
		});

		return facetsArray;
	}
}

module.exports.Facets = new Facets();
