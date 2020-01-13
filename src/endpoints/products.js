const {stringify} = require('query-string')
const schemas = require('@retracedgmbh/schemas')
const Endpoint = require('../endpoint')

class Products extends Endpoint {
	create(accessToken, {name, pictures, description, attributes, supplyChain}) {
		return this.requestJSON(
			accessToken,
			'POST',
			'products',
			{
				name,
				pictures,
				description,
				attributes,
				supplyChain
			},
			schemas.request.product.create.body
		)
	}

	delete(accessToken, id) {
		return this.requestJSON(accessToken, 'DELETE', `products/${id}`)
	}

	get(accessToken, id, {attributes = undefined, variations = undefined, orders = undefined, supplyChain = undefined}) {
		return this.requestJSON(
			accessToken,
			'GET',
			`products/${id}?${stringify({attributes, variations, orders, supplyChain})}`,
			{attributes, variations, orders, supplyChain},
			schemas.request.product.get.querystring
		)
	}

	getVersion(
		accessToken,
		id,
		version,
		{attributes = undefined, variations = undefined, orders = undefined, supplyChain = undefined}
	) {
		return this.requestJSON(
			accessToken,
			'GET',
			`products/${id}/${version}?${stringify({attributes, variations, orders, supplyChain})}`,
			{attributes, variations, orders, supplyChain},
			schemas.request.product.get.querystring
		)
	}

	approve(accessToken, id, version) {
		return this.requestJSON(accessToken, 'PUT', `products/${id}/${version}/approve`)
	}

	reject(accessToken, id, version) {
		return this.requestJSON(accessToken, 'PUT', `products/${id}/${version}/reject`)
	}

	remove(accessToken, id, version) {
		return this.requestJSON(accessToken, 'PUT', `products/${id}/${version}/remove`)
	}

	archive(accessToken, id, version) {
		return this.requestJSON(accessToken, 'PUT', `products/${id}/${version}/archive`)
	}

	request(accessToken, id, version) {
		return this.requestJSON(accessToken, 'PUT', `products/${id}/${version}/request`)
	}

	list(
		accessToken,
		{
			status = undefined,
			sort = undefined,
			isActive = undefined,
			isMarkedForRemoval = undefined,
			isDropDown = undefined,
			isArchived = undefined
		},
		{page = undefined, count = undefined}
	) {
		return this.requestJSON(
			accessToken,
			'GET',
			`products?${stringify({
				status,
				sort,
				isActive,
				isMarkedForRemoval,
				isDropDown,
				isArchived,
				page,
				count
			})}`,
			{
				status,
				sort,
				isActive,
				isMarkedForRemoval,
				isDropDown,
				isArchived,
				page,
				count
			},
			schemas.request.product.list.querystring
		)
	}

	createNewVersion(accessToken, id, {name, pictures, description, attributes, supplyChain}) {
		return this.requestJSON(
			accessToken,
			'POST',
			`products/${id}`,
			{
				name,
				pictures,
				description,
				attributes,
				supplyChain
			},
			schemas.request.product.create.body
		)
	}

	update(accessToken, id, version, {name, pictures, description, attributes, variations, supplyChain}) {
		return this.requestJSON(
			accessToken,
			'PUT',
			`products/${id}/${version}`,
			{name, pictures, description, attributes, variations, supplyChain},
			schemas.request.product.update.body
		)
	}

	updateLocked(accessToken, id, version, {name, pictures, description, attributes, variations, supplyChain}) {
		return this.requestJSON(
			accessToken,
			'PUT',
			`products/${id}/${version}/update-locked`,
			{name, pictures, description, attributes, variations, supplyChain},
			schemas.request.product.updateLocked.body
		)
	}
}

module.exports = Products
