module.exports = [
	{
		id: 'validate',
		url: '*',
		method: ['GET', 'POST', 'PUT', 'PATCH'],
		variants: [
			{
				id: 'check-token',
				handler: 'middleware',
				options: {
					middleware: (req, res, next, core) => {
						const token = req.headers.authorization
						if (token) {
							next()
						} else {
							console.log('Not authorized.')
							res.status(401).json({ msg: 'Not authorized.' })
						}
					},
				},
			},
		],
	},
]
