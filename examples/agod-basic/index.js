const agod = require('../../agod.js');

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
	console.log(`Dataset Title: ${agod.Dataset.GetDatasetTitles(data)[0]}`);
	console.log(`Dataset Cataloger: ${agod.Dataset.GetDatasetCatalogers(data)[0]}`);
	console.log(`Dataset Department: ${agod.Dataset.GetDatasetPublishers(data)[0].name}`);
	console.log(`Dataset Issued At: ${agod.Dataset.GetDatasetDatesOfIssue(data)[0]}`);
	console.log(`Dataset Updated At: ${agod.Dataset.GetDatasetModificationDates(data)[0]}`);
	console.log(`Dataset Description:\n${agod.Dataset.GetDatasetDescriptions(data)[0]}`);
	console.log(`Dataset Rating: ${Math.floor(agod.Dataset.GetDatasetScores(data)[0] / 1000)}`);
});
