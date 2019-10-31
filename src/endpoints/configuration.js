const Endpoint = require('../endpoint')

class Configuration extends Endpoint {
	get() {
		return this.requestJSON('', 'GET', `configuration`)
	}
}

module.exports = Configuration
