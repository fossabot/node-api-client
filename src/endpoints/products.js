const {stringify} = require('query-string')
const schemas = require('@retracedgmbh/schemas')
const Endpoint = require('../endpoint')

class Products extends Endpoint {
	create(accessToken, {supplyChainId, name, pictures, i18n, attributes}) {
		return this.requestJSON(
			accessToken,
			'POST',
			'products',
			{
				supplyChainId,
				name,
				pictures,
				i18n,
				attributes
			},
			schemas.request.product.create.body
		)
	}

	delete(accessToken, id) {
		return this.requestJSON(accessToken, 'DELETE', `products/${id}`)
	}

	get(accessToken, id, {deep = undefined, attributes = undefined, variations = undefined, orders = undefined}) {
		return this.requestJSON(
			accessToken,
			'GET',
			`products/${id}?${stringify({deep, attributes, variations, orders})}`,
			{deep, attributes, variations, orders},
			schemas.request.product.get.querystring
		)
	}

	list(accessToken, {supplyChainId = undefined, dropdownlist = undefined, page = undefined, count = undefined}) {
		return this.requestJSON(
			accessToken,
			'GET',
			`products?${stringify({
				supplyChainId,
				dropdownlist,
				page,
				count
			})}`,
			{
				supplyChainId,
				dropdownlist,
				page,
				count
			},
			schemas.request.product.list.querystring
		)
	}

	update(accessToken, id, {supplyChainId, name, pictures, i18n, attributes, variations}) {
		return this.requestJSON(
			accessToken,
			'PUT',
			`products/${id}`,
			{id, supplyChainId, name, pictures, i18n, attributes, variations},
			schemas.request.product.update.body
		)
	}
}

module.exports = Products
