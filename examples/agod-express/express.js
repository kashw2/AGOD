const agod = require('../../agod');
const express = require('express');

const app = express();
const port = 80;

app.get('/index.html', (req, res) => {
	agod.GetDatasetByName('Acid Sulfate Soils Risk').then((data) => {
		res.send(`
            <h1>${agod.GetDatasetTitles(data)[0]}</h1>
            <p>${agod.GetDatasetCatalogers(data)[0]}</p>
            <p>${agod.GetDatasetPublishers(data)[0].name}</p>
            <p>Issued At: ${agod.GetDatasetDatesOfIssue(data)[0]}</p>
            <p>Last Updated: ${agod.GetDatasetModificationDates(data)[0]}</p>
            <p>${agod.GetDatasetDescriptions(data)[0]}</p>
            <p>${Math.floor(agod.GetDatasetScores(data)[0] / 1000)}</p>
        `);
	});
});

app.listen(port, () => console.log(`Listening on port ${port}`));
