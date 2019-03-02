const agod = require('../../agod');

const query = {
	search: 'Acid Sulfate Soils Risk',
	dateFrom: '1975-01-31T14:00:00.000Z',
	dateTo: '2018-04-30T14:00:00.000Z',
	publisher: 'Office of Environment and Heritage (OEH)',
	region: 'STE:1',
	start: '0',
	limit: '1'
};

agod.Data.GetData(query).then((data) => {
	console.log(`Dataset Title: ${agod.Dataset.GetTitles(data)[0]}`);
	console.log(`Dataset Cataloger: ${agod.Dataset.GetCatalogers(data)[0]}`);
	console.log(`Dataset Department: ${agod.Dataset.GetPublishers(data)[0].name}`);
	console.log(`Dataset Issued At: ${agod.Dataset.GetDatesOfIssue(data)[0]}`);
	console.log(`Dataset Updated At: ${agod.Dataset.GetModificationDates(data)[0]}`);
	console.log(`Dataset Description:\n${agod.Dataset.GetDescriptions(data)[0]}`);
	console.log(`Dataset Rating: ${Math.floor(agod.Dataset.GetScores(data)[0] / 1000)}`);
});
