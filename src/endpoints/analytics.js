const Endpoint = require('../endpoint')

class Analytics extends Endpoint {
	get(accessToken, {type, start, end}) {
		const startParam = start ? `&start=${start}` : ''
		const endParam = end ? `&end=${end}` : ''
		return this.requestJSON(accessToken, 'GET', `analytics/analysis?type=${type}${startParam}${endParam}`)
	}
}

module.exports = Analytics
