const Endpoint = require('../endpoint')

class Statistics extends Endpoint {
	get(accessToken) {
		return this.requestJSON(accessToken, 'GET', `statistics`)
	}
}

module.exports = Statistics
