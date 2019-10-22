const Endpoint = require('../endpoint')

class Status extends Endpoint {
	get() {
		return this.requestJSON('', 'GET', `status`)
	}

	liveness() {
		return this.requestJSON('', 'GET', `status/liveness`)
	}

	readiness() {
		return this.requestJSON('', 'GET', `status/readiness`)
	}
}

module.exports = Status
