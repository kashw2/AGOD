"use strict";
exports.__esModule = true;
// Dependencies
var fetch = require("./node_modules/node-fetch");
var Authorization = /** @class */ (function () {
    function Authorization() {
        // Define the API Endpoint
        this.endpoint = 'https://www.data.gov.au/api/v0/auth/users';
    }
    /**
     * GetCurrentUser()
     *
     * Gets the current user from the whoami api enpoint.
     *
     * @returns Promise for API user.
     *
     */
    Authorization.prototype.GetCurrentUser = function () {
        return fetch(this.endpoint + "/whoami", {
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
            .then(function (response) { return response.json(); })
            .then(function (json) {
            return json;
        })["catch"](function (error) { return console.error(error); });
    };
    /**
     * GetUserById()
     *
     * Gets a user from the whoami api enpoint with a given userId.
     *
     * @param {Number} userId The id of he user to get data from.
     *
     * @returns Promise for API user.
     *
     */
    Authorization.prototype.GetUserById = function (userId) {
        return fetch(this.endpoint + "/" + userId, {
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
            .then(function (response) { return response.json(); })
            .then(function (json) {
            return json;
        })["catch"](function (error) { return console.error(error); });
    };
    return Authorization;
}());
module.exports.Authorization = new Authorization();
var Content = /** @class */ (function () {
    function Content() {
        // Define the API endpoint
        this.endpoint = 'https://www.data.gov.au/api/v0/content';
    }
    /**
     * DeleteContent()
     *
     * Sends a Delete request for a specific piece of content to the API.
     *
     * Requires admin permission via the API.
     *
     * ? The API documentation states that this should be a DELETE request however a DELETE request returns invalid JSON.
     *
     * @param {String} contentId The content identifier that you wish to delete.
     *
     * @returns Promise for API delete request result.
     *
     */
    Content.prototype.DeleteContent = function (contentId) {
        return fetch(this.endpoint + "/" + contentId, {
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
            .then(function (response) { return response.json(); })
            .then(function (json) {
            return json;
        })["catch"](function (error) { return console.error(error); });
    };
    /**
     * GetAll()
     *
     * Gets all the content from the content api endpoint.
     *
     * ? The API documentation states that this should be a POST request however a POST request returns 404.
     *
     * @returns Promise for API content.
     *
     */
    Content.prototype.GetAll = function () {
        return fetch(this.endpoint + "/all", {
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
            .then(function (response) { return response.json(); })
            .then(function (json) {
            return json;
        })["catch"](function (error) { return console.error(error); });
    };
    /**
     * GetContent()
     *
     * Sends a get request for a specific piece of content to the API.
     *
     * @param {String} contentId The identifier for the content that you wish to retrieve.
     * @param {String} format The format for the content that you wish to retrieve.
     *
     * @returns Promise for API content
     *
     */
    Content.prototype.GetContent = function (contentId, format) {
        return fetch(this.endpoint + "/" + contentId + "." + format, {
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
            .then(function (response) { return response.json(); })
            .then(function (json) {
            return json;
        })["catch"](function (error) { return console.error(error); });
    };
    /**
     * UpdateContent()
     *
     * Sends a PUT request to the API to update a specific piece of content.
     *
     * @param {String} contentId The identifier for the content that you wish to retrieve.
     *
     * @returns Promise for API put request result.
     *
     */
    Content.prototype.UpdateContent = function (contentId) {
        return fetch(this.endpoint + "/" + contentId, {
            method: 'PUT',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            redirect: 'manual',
            referrer: 'no-referrer-when-downgrade'
        })
            .then(function (response) { return response.json(); })
            .then(function (json) {
            return json;
        })["catch"](function (error) { return console.error(error); });
    };
    return Content;
}());
module.exports.Content = new Content();
var Data = /** @class */ (function () {
    function Data() {
        // Define the API endpoint
        this.endpoint = 'https://www.data.gov.au/api/v0/search/datasets';
    }
    /**
     * GetAll()
     *
     * Gets the latest dataset from the Australian Government's Open Data.
     *
     * @returns Promise for API data.
     *
     */
    Data.prototype.GetAll = function () {
        return fetch(this.endpoint + "?start=0&limit=1000", {
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
            .then(function (response) { return response.json(); })
            .then(function (json) {
            return json;
        })["catch"](function (error) { return console.error(error); });
    };
    /**
     * GetData()
     *
     * Sends a GET request to the API.
     *
     * @param {any} query The query object.
     *
     * @returns Promise for API data.
     *
     */
    Data.prototype.GetData = function (query) {
        var endpoint = this.endpoint + "?query=" + query.search + "&dateFrom=" + query.dateFrom + "&dateTo=" + query.dateTo + "&publisher=" + query.publisher + "&region=" + query.region + "&start=" + query.start + "&limit=" + query.limit;
        if (query.dateFrom == '' || query.dateFrom == undefined) {
            endpoint = this.endpoint.replace('&dateFrom=undefined', '');
        }
        if (query.dateTo == '' || query.dateTo == undefined) {
            if (query.dateFrom == '' || query.dateFrom == undefined) {
                endpoint = this.endpoint.replace('&dateTo=undefined', '');
            }
            else {
                var date = new Date();
                query.dateTo = date.toUTCString();
            }
        }
        if (query.start == '' || query.start == undefined) {
            endpoint = this.endpoint.replace('&start=undefined', '');
        }
        if (query.limit == '' || query.limit == undefined) {
            endpoint = this.endpoint.replace('&limit=undefined', '');
        }
        if (query.publisher == '' || query.publisher == undefined) {
            endpoint = this.endpoint.replace('&publisher=undefined', '');
        }
        if (query.region == '' || query.region == undefined) {
            endpoint = this.endpoint.replace('&region=undefined', '');
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
            .then(function (response) { return response.json(); })
            .then(function (json) {
            return json;
        })["catch"](function (error) { return console.error(error); });
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
    Data.prototype.GetDatasetByName = function (name) {
        return fetch(this.endpoint + "?query=" + name, {
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
            .then(function (response) { return response.json(); })
            .then(function (json) {
            return json;
        })["catch"](function (error) { return console.error(error); });
    };
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
    Data.prototype.GetDatasetByDate = function (dateFrom, dateTo) {
        return fetch(this.endpoint + "?dateFrom=" + dateFrom + "&dateTo=" + dateTo, {
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
            .then(function (response) { return response.json(); })
            .then(function (json) {
            return json;
        })["catch"](function (error) { return console.error(error); });
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
    Data.prototype.GetDatasetByPublisher = function (publisher) {
        return fetch(this.endpoint + "?publisher=" + publisher, {
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
            .then(function (response) { return response.json(); })
            .then(function (json) {
            return json;
        })["catch"](function (error) { return console.error(error); });
    };
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
    Data.prototype.GetDatasetByRegion = function (region) {
        return fetch(this.endpoint + "?region=" + region, {
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
            .then(function (response) { return response.json(); })
            .then(function (json) {
            return json;
        })["catch"](function (error) { return console.error(error); });
    };
    return Data;
}());
module.exports.Data = new Data();
var Dataset = /** @class */ (function () {
    function Dataset() {
    }
    /**
     * GetCatalogers()
     *
     * Returns dataset catalog attributes in a given collection/array.
     *
     * @param {Object[]} collection A collection/array of Datasets.
     *
     * @returns An array containing the catalogs of the Datasets.
     *
     */
    Dataset.prototype.GetCatalogers = function (collection) {
        var datasetCatalogs = [];
        collection.dataSets.forEach(function (item) {
            datasetCatalogs.push(item.catalog);
        });
        return datasetCatalogs;
    };
    /**
     * GetContactPoints()
     *
     * Returns dataset contactPoint attributes in a given collection/array.
     *
     * @param {Object[]} collection A collection/array of Datasets.
     *
     * @returns An array containing the contact points of the Datasets.
     *
     */
    Dataset.prototype.GetContactPoints = function (collection) {
        var datasetContacts = [];
        collection.dataSets.forEach(function (item) {
            datasetContacts.push(item.contactPoint);
        });
        return datasetContacts;
    };
    /**
     * GetCreationDates()
     *
     * Returns dataset creation attributes in a given collection/array.
     *
     * @param {Object[]} collection A collection/array of Datasets.
     *
     * @returns An array containing the creations of the Datasets.
     *
     */
    Dataset.prototype.GetCreationDates = function (collection) {
        var datasetCreationDates = [];
        collection.dataSets.forEach(function (item) {
            datasetCreationDates.push(item.creation);
        });
        return datasetCreationDates;
    };
    /**
     * GetDescriptions()
     *
     * Returns dataset description attributes in a given collection/array.
     *
     * @param {Object[]} collection A collection/array of Datasets.
     *
     * @returns An array containing the descriptions of the Datasets.
     *
     */
    Dataset.prototype.GetDescriptions = function (collection) {
        var datasetDescriptions = [];
        collection.dataSets.forEach(function (item) {
            datasetDescriptions.push(item.description);
        });
        return datasetDescriptions;
    };
    /**
     * GetHasQualities()
     *
     * Returns dataset hasQuality attributes in a given collection/array.
     *
     * @param {Object[]} collection A collection/array of Datasets.
     *
     * @returns An array containing the boolean hasQualities of the Datasets.
     *
     */
    Dataset.prototype.GetHasQualities = function (collection) {
        var datasetQualities = [];
        collection.dataSets.forEach(function (item) {
            datasetQualities.push(item.hasQuality);
        });
        return datasetQualities;
    };
    /**
     * GetIdentifiers()
     *
     * Returns dataset identifer attributes in a given collection/array.
     *
     * @param {Object[]} collection A collection/array of Datasets.
     *
     * @returns An array containing the identifers of the Datasets.
     *
     */
    Dataset.prototype.GetIdentifiers = function (collection) {
        var datasetIdentifiers = [];
        collection.dataSets.forEach(function (item) {
            datasetIdentifiers.push(item.identifer);
        });
        return datasetIdentifiers;
    };
    /**
     * GetDatesOfIssue()
     *
     * Returns dataset issued attributes in a given collection/array.
     *
     * @param {Object[]} collection A collection/array of Datasets.
     *
     * @returns An array containing the date of issue for the Datasets.
     *
     */
    Dataset.prototype.GetDatesOfIssue = function (collection) {
        var datasetIssueds = [];
        collection.dataSets.forEach(function (item) {
            datasetIssueds.push(item.issued);
        });
        return datasetIssueds;
    };
    /**
     * GetLandingPages()
     *
     * Returns dataset landing page attributes in a given collection/array.
     *
     * @param {Object[]} collection A collection/array of Datasets.
     *
     * @returns An array containing the landing pages of the Datasets.
     *
     */
    Dataset.prototype.GetLandingPages = function (collection) {
        var datasetLandingPages = [];
        collection.dataSets.forEach(function (item) {
            datasetLandingPages.push(item.landingPage);
        });
        return datasetLandingPages;
    };
    /**
     * GetModificationDates()
     *
     * Returns dataset modification attributes in a given collection/array.
     *
     * @param {Object[]} collection A collection/array of Datasets.
     *
     * @returns An array containing the modification dates of the Datasets.
     *
     */
    Dataset.prototype.GetModificationDates = function (collection) {
        var datasetModificationDates = [];
        collection.dataSets.forEach(function (item) {
            datasetModificationDates.push(item.modified);
        });
        return datasetModificationDates;
    };
    /**
     * GetPublishers()
     *
     * Returns dataset publisher attributes in a given collection/array.
     *
     * @param {Object[]} collection A collection/array of Datasets.
     *
     * @returns An array containing the publisher of the Datasets.
     *
     */
    Dataset.prototype.GetPublishers = function (collection) {
        var datasetPublishers = [];
        collection.dataSets.forEach(function (item) {
            datasetPublishers.push(item.publisher);
        });
        return datasetPublishers;
    };
    /**
     * GetQualities()
     *
     * Returns dataset quality attributes in a given collection/array.
     *
     * @param {Object[]} collection A collection/array of Datasets.
     *
     * @returns An array containing the qualities of the Datasets.
     *
     */
    Dataset.prototype.GetQualities = function (collection) {
        var datasetQualities = [];
        collection.dataSets.forEach(function (item) {
            datasetQualities.push(item.quality);
        });
        return datasetQualities;
    };
    /**
     * GetScores()
     *
     * Returns dataset score attributes in a given collection/array.
     *
     * @param {Object[]} collection A collection/array of Datasets.
     *
     * @returns An array containing the scores of the Datasets.
     *
     */
    Dataset.prototype.GetScores = function (collection) {
        var datasetScores = [];
        collection.dataSets.forEach(function (item) {
            datasetScores.push(item.score);
        });
        return datasetScores;
    };
    /**
     * GetTemporal()
     *
     * Returns dataset temporal attributes in a given collection/array.
     *
     * @param {Object[]} collection A collection/array of Datasets.
     *
     * @returns An array containing the temporals of the Datasets.
     *
     */
    Dataset.prototype.GetTemporal = function (collection) {
        var datasetTemporals = [];
        collection.dataSets.forEach(function (item) {
            datasetTemporals.push(item.temporal);
            datasetTemporals.push(item.temporal);
            datasetTemporals.push(item.temporal);
            datasetTemporals.push(item.temporal);
        });
        return datasetTemporals;
    };
    /**
     * GetTitles()
     *
     * Returns dataset title attributes in a given collection/array.
     *
     * @param {Object[]} collection A collection/array of Datasets.
     *
     * @returns An array containing the titles of the Datasets.
     *
     */
    Dataset.prototype.GetTitles = function (collection) {
        var datasetTitles = [];
        collection.dataSets.forEach(function (item) {
            datasetTitles.push(item.title);
        });
        return datasetTitles;
    };
    /**
     * GetYears()
     *
     * Returns dataset year attributes in a given collection/array.
     *
     * @param {Object[]} collection A collection/array of Datasets.
     *
     * @returns An array containing the years of the Datasets.
     *
     */
    Dataset.prototype.GetYears = function (collection) {
        var datasetYears = [];
        collection.dataSets.forEach(function (item) {
            datasetYears.push(item.years);
        });
        return datasetYears;
    };
    return Dataset;
}());
module.exports.Dataset = new Dataset();
var Facet = /** @class */ (function () {
    function Facet() {
        // Define the API endpoint
        this.endpoint = 'https://www.data.gov.au/api/v0/search/facets';
    }
    /**
     * GetFacet()
     *
     * Sends a GET request to the API to return options for a specific facet.
     *
     * @param {String} facetId id of the facet.
     *
     * @returns An array containing the hit count and options for a facet.
     *
     */
    Facet.prototype.GetFacet = function (facetId) {
        return fetch(this.endpoint + "/" + facetId + "/options", {
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
            .then(function (response) { return response.json(); })
            .then(function (json) {
            return json;
        })["catch"](function (error) { return console.error(error); });
    };
    /**
     * GetFacetsFromCollection()
     *
     * Returns facets in a given collection/array.
     *
     * @param {Object[]} collection The collection/array that contains data returned by GetAllData() or GetData().
     *
     * @returns An array containing the facets of the collection/array.
     *
     */
    Facet.prototype.GetFacetsFromCollection = function (collection) {
        var facetArray = [];
        collection.facets.forEach(function (item) {
            facetArray.push(item);
        });
        return facetArray;
    };
    return Facet;
}());
module.exports.Facet = new Facet();
