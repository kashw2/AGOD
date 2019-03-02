const agod = require('../../agod');

agod.Facet.GetFacet('Publisher').then((data) => {
	console.log(data);
});
