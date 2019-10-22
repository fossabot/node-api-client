const Endpoint = require('../endpoint')

class Info extends Endpoint {
	get() {
		return this.requestJSON('', 'GET', `info`)
	}
}

module.exports = Info
