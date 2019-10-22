const Endpoint = require('../endpoint')

class Me extends Endpoint {
	get(accessToken) {
		return this.requestJSON(accessToken, 'GET', `me`)
	}
}

module.exports = Me
