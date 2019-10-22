const axios = require('axios')
const utils = require('./utils')

class Endpoint {
	constructor(apiHost) {
		this.url = apiHost
	}

	async requestJSON(accessToken, method, path, data, schema) {
		const parseData = utils.ajvValidate(schema, data)

		const response = await axios({
			method,
			url: `${this.url}/${path}`,
			headers: accessToken
				? {
						Authorization: `Bearer ${accessToken}`
				  }
				: {},
			data: parseData
		})

		return response
	}
}

module.exports = Endpoint
