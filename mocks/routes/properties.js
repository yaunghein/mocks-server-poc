const {
	emptyProppertiesData,
	normalPropertiesData,
	morePropertiesData,
} = require('../../fixtures/properties')

module.exports = [
	{
		id: 'get-properties-data',
		url: '/properties',
		method: 'GET',
		variants: [
			{
				id: 'empty',
				type: 'json',
				options: {
					status: 200,
					body: emptyProppertiesData,
				},
			},
			{
				id: 'normal',
				type: 'json',
				options: {
					status: 200,
					body: normalPropertiesData,
				},
			},
			{
				id: 'more',
				type: 'json',
				options: {
					status: 200,
					body: morePropertiesData,
				},
			},
		],
	},
]
