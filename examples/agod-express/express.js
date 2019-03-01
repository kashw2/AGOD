const agod = require('../../agod');
const express = require('express');

const app = express();
const port = 80;

app.get('/index.html', (req, res) => {
	agod.Data.GetDatasetByName('Acid Sulfate Soils Risk').then((data) => {
		res.send(`
            <h1>${agod.Dataset.GetDatasetTitles(data)[0]}</h1>
            <p>${agod.Dataset.GetDatasetCatalogers(data)[0]}</p>
            <p>${agod.Dataset.GetDatasetPublishers(data)[0].name}</p>
            <p>Issued At: ${agod.Dataset.GetDatasetDatesOfIssue(data)[0]}</p>
            <p>Last Updated: ${agod.Dataset.GetDatasetModificationDates(data)[0]}</p>
            <p>${agod.Dataset.GetDatasetDescriptions(data)[0]}</p>
            <p>${Math.floor(agod.Dataset.GetDatasetScores(data)[0] / 1000)} Stars</p>
        `);
	});
});

app.listen(port, () => console.log(`Listening on port ${port}`));
