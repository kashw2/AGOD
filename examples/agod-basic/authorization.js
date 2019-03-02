const agod = require('../../agod');

agod.Authorization.GetCurrentUser().then((data) => {
	console.log(data);
});
