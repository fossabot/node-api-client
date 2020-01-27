const {stringify} = require('query-string')
const Endpoint = require('../endpoint')

class Analytics extends Endpoint {
	get(accessToken, {type, start, end}) {
		return this.requestJSON(
			accessToken,
			'GET',
			`analytics/analysis/?type=${type}&start=${stringify({start})}&end=${stringify({end})}`
		)
	}
}

module.exports = Analytics
