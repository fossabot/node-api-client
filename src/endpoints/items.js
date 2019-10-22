const {stringify} = require('query-string')
const schemas = require('@retracedgmbh/schemas')
const Endpoint = require('../endpoint')

class Items extends Endpoint {
	create(accessToken, {lineId, ids}) {
		return this.requestJSON(accessToken, 'POST', `items`, {lineId, ids}, schemas.request.item.create.body)
	}

	delete(accessToken, {id}) {
		return this.requestJSON(accessToken, 'DELETE', `items/${id}`)
	}

	get(accessToken, id, {existence = undefined}) {
		return this.requestJSON(
			accessToken,
			'GET',
			`items/${id}?${stringify({existence})}`,
			{existence},
			schemas.request.item.get.querystring
		)
	}

	random(accessToken, {productId = undefined, sku = undefined}) {
		return this.requestJSON(
			accessToken,
			'GET',
			`items?${stringify({productId, sku})}`,
			{productId, sku},
			schemas.request.item.random.querystring
		)
	}
}

module.exports = Items
