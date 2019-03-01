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

agod.GetData(query).then((data) => {
	console.log(`Dataset Title: ${agod.GetDatasetTitles(data)[0]}`);
	console.log(`Dataset Cataloger: ${agod.GetDatasetCatalogers(data)[0]}`);
	console.log(`Dataset Department: ${agod.GetDatasetPublishers(data)[0].name}`);
	console.log(`Dataset Issued At: ${agod.GetDatasetDatesOfIssue(data)[0]}`);
	console.log(`Dataset Updated At: ${agod.GetDatasetModificationDates(data)[0]}`);
	console.log(`Dataset Description:\n${agod.GetDatasetDescriptions(data)[0]}`);
	console.log(`Dataset Rating: ${Math.floor(agod.GetDatasetScores(data)[0] / 1000)}`);
});
