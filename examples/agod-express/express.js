const agod = require('../../agod');
const express = require('express');

const app = express();
const port = 80;

app.get('/', (req, res) => {
	agod.Data.GetDatasetByName('Acid Sulfate Soils Risk').then((data) => {
		res.send(`
            <h1>${agod.Dataset.GetTitles(data)[0]}</h1>
            <p>${agod.Dataset.GetCatalogers(data)[0]}</p>
            <p>${agod.Dataset.GetPublishers(data)[0].name}</p>
            <p>Issued At: ${agod.Dataset.GetDatesOfIssue(data)[0]}</p>
            <p>Last Updated: ${agod.Dataset.GetModificationDates(data)[0]}</p>
            <p>${agod.Dataset.GetDescriptions(data)[0]}</p>
            <p>${Math.floor(agod.Dataset.GetScores(data)[0] / 1000)} Stars</p>
        `);
	});
});

app.listen(port, () => console.log(`Listening on port ${port}`));
