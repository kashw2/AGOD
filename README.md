# AGOD - Australian Government Open Data API Wrapper

AGOD is an open sourced Australian Government Open Data API Wrapper that takes the hard part of manually substituting your own values in a body of a request or in the URL and makes it easier.

The Australian Government's Open Data API is maintained and dependant on the [MAGDA](https://magda.io/) API. To keep this strictly Australian Government related, only some functionality of MAGDA that is actually used by the Australian Government's Open Data website will be included in this wrapper. What is available will be documented in the future.

---

## Requirements

[npm](https://www.npmjs.com/)

[node](https://nodejs.org/en/)

Everything else can be installed by running 
```
npm install
```

---

## Usage

AGOD works on a promise based system and as such returns, a promise for all of it's calls to the API via Fetch as such you will need to use the 'then' method to return your result. This will be updated with documentation in future releases.

#### Example

``` javascript
const agod = require('agod');

const query = {
	search: 'Acid Sulfate Soils Risk',
	dateFrom: '1975-01-31T14:00:00.000Z',
	dateTo: '2018-04-30T14:00:00.000Z',
	publisher: 'Office of Environment and Heritage (OEH)',
	region: 'STE:1',
	start: '0',
	limit: '10'
};

agod.Data.GetData(query).then((data) => {
	console.log(data);
});
```
More examples can be found in the examples directory.

---

## Disclaimer

I'm in no way affiliated with the Federal or State government or any other governing bodies of Australia and this is not an official API/API Wrapper.

For info regarding the official API click [here](https://data.gov.au/api/v0/apidocs/index.html)