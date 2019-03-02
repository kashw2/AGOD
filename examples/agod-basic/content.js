const agod = require('../../agod');

agod.Content.GetAll().then((data) => {
	console.log(data);
});
