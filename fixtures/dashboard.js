const dashboardData = {
	data: {
		available_credit: '65000.0',
		potential_rent_increases: '63217.0',
		total_deployed: '10000.0',
		increased_management_fees: {
			labels: ['1633046400'],
			values: ['36.9'],
		},
		project_revenue: {
			labels: ['1633046400'],
			values: ['10000.0'],
		},
	},
	message: 'Dashboard data fetched successfully',
}

const dashboardDataWithNoChartData = {
	data: {
		available_credit: '65000.0',
		potential_rent_increases: '63217.0',
		total_deployed: '10000.0',
		increased_management_fees: null,
		project_revenue: null,
	},
	message: 'Dashboard data fetched successfully',
}

const dashboardDataWithMoreChartData = {
	data: {
		available_credit: '65000.0',
		potential_rent_increases: '63217.0',
		total_deployed: '10000.0',
		increased_management_fees: {
			labels: [
				'1633046400',
				'1633046400',
				'1634046400',
				'1633046400',
				'1636046400',
				'1633046400',
				'1683046400',
				'1693046400',
			],
			values: [
				'90.9',
				'120.3',
				'100.5',
				'260.0',
				'240.5',
				'200.5',
				'180.0',
				'240.8',
			],
		},
		project_revenue: {
			labels: [
				'1633046400',
				'1633446400',
				'1633546400',
				'1633046400',
				'1633446400',
				'1633546400',
			],
			values: [
				'10000.0',
				'14000.0',
				'12000.0',
				'10000.0',
				'14000.0',
				'12000.0',
			],
		},
	},
	message: 'Dashboard data fetched successfully',
}

module.exports = {
	dashboardData,
	dashboardDataWithNoChartData,
	dashboardDataWithMoreChartData,
}
