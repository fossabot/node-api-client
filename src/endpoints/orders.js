const {stringify} = require('query-string')
const schemas = require('@retracedgmbh/schemas')
const Endpoint = require('../endpoint')

class Orders extends Endpoint {
	accept(accessToken, id, {fileId, updatedAt}) {
		return this.requestJSON(
			accessToken,
			'PUT',
			`orders/${id}/accept`,
			{fileId, updatedAt},
			schemas.request.order.accept.body
		)
	}

	create(accessToken, {variations}) {
		return this.requestJSON(accessToken, 'POST', `orders`, {variations}, schemas.request.order.create.body)
	}

	get(accessToken, id, {deep = undefined, lines = undefined}) {
		return this.requestJSON(
			accessToken,
			'GET',
			`orders/${id}?${stringify({deep, lines})}`,
			{deep, lines},
			schemas.request.order.get.querystring
		)
	}

	issue(accessToken, id, {fileId, updatedAt}) {
		return this.requestJSON(
			accessToken,
			'PUT',
			`orders/${id}/issue`,
			{fileId, updatedAt},
			schemas.request.order.issue.body
		)
	}

	list(accessToken, {status = undefined, page = undefined, count = undefined}) {
		return this.requestJSON(
			accessToken,
			'GET',
			`orders?${stringify({status, page, count})}`,
			{status, page, count},
			schemas.request.order.list.querystring
		)
	}

	receive(accessToken, id, {fileId, updatedAt}) {
		return this.requestJSON(
			accessToken,
			'PUT',
			`orders/${id}/receive`,
			{fileId, updatedAt},
			schemas.request.order.receive.body
		)
	}

	reject(accessToken, id, {fileId, updatedAt}) {
		return this.requestJSON(
			accessToken,
			'PUT',
			`orders/${id}/reject`,
			{fileId, updatedAt},
			schemas.request.order.reject.body
		)
	}

	ship(accessToken, id, {fileId, updatedAt}) {
		return this.requestJSON(
			accessToken,
			'PUT',
			`orders/${id}/ship`,
			{fileId, updatedAt},
			schemas.request.order.ship.body
		)
	}

	skip(accessToken, id, {fileId, updatedAt}) {
		return this.requestJSON(
			accessToken,
			'PUT',
			`orders/${id}/skip`,
			{fileId, updatedAt},
			schemas.request.order.skip.body
		)
	}

	changeStatus(accessToken, statusAction, id, params) {
		switch (statusAction) {
			case 'issue':
				return this.issue(accessToken, id, params)
			case 'accept':
				return this.accept(accessToken, id, params)
			case 'ship':
				return this.ship(accessToken, id, params)
			case 'receive':
				return this.receive(accessToken, id, params)
			case 'skip':
				return this.skip(accessToken, id, params)
			case 'reject':
				return this.reject(accessToken, id, params)
			default:
				throw new Error('no action matched')
		}
	}
}

module.exports = Orders
