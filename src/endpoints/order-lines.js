const {stringify} = require('query-string')
const schemas = require('@retracedgmbh/schemas')
const Endpoint = require('../endpoint')

class OrderLines extends Endpoint {
	get(accessToken, id) {
		return this.requestJSON(accessToken, 'GET', `orderlines/${id}`)
	}

	list(accessToken, {orderId = undefined, status = undefined}) {
		return this.requestJSON(
			accessToken,
			'GET',
			`orderlines?${stringify({orderId, status})}`,
			{orderId, status},
			schemas.request.orderLine.list.querystring
		)
	}
}

module.exports = OrderLines
