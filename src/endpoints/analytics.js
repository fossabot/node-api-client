const Endpoint = require('../endpoint')

class Analytics extends Endpoint {
	get(accessToken, {type, start, end}) {
		return this.requestJSON(accessToken, 'GET', `analytics/analysis?type=${type}&start=${start}&end=${end}`)
	}
}

module.exports = Analytics
