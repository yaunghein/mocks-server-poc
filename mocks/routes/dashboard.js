const {
	dashboardData,
	dashboardDataWithNoChartData,
	dashboardDataWithMoreChartData,
} = require('../../fixtures/dashboard')

module.exports = [
	{
		id: 'get-dashboard-data',
		url: '/dashboard',
		method: 'GET',
		variants: [
			{
				id: 'empty',
				type: 'json',
				options: {
					status: 200,
					body: dashboardDataWithNoChartData,
				},
			},
			{
				id: 'normal',
				type: 'json',
				options: {
					status: 200,
					body: dashboardData,
				},
			},
			{
				id: 'more',
				type: 'json',
				options: {
					status: 200,
					body: dashboardDataWithMoreChartData,
				},
			},
		],
	},
]
