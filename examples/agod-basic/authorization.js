const agod = require('../../agod.js');

agod.Authorization.GetCurrentUser().then((data) => {
	console.log(data);
});
