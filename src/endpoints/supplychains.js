const {stringify} = require('query-string')
const schemas = require('@retracedgmbh/schemas')
const Endpoint = require('../endpoint')

class SupplyChains extends Endpoint {
	approve(accessToken, id) {
		return this.requestJSON(accessToken, 'PUT', `supplychains/${id}/approve`)
	}

	reject(accessToken, id) {
		return this.requestJSON(accessToken, 'PUT', `supplychains/${id}/reject`)
	}

	request(accessToken, id) {
		return this.requestJSON(accessToken, 'PUT', `supplychains/${id}/request`)
	}

	create(accessToken, {name, entrySupplyNodeId, nodes, links}) {
		return this.requestJSON(
			accessToken,
			'POST',
			'supplychains',
			{name, entrySupplyNodeId, nodes, links},
			schemas.request.supplychain.create.body
		)
	}

	get(accessToken, id, {deep = undefined, nodes = undefined, links = undefined}) {
		return this.requestJSON(
			accessToken,
			'GET',
			`supplychains/${id}?${stringify({deep, nodes, links})}`,
			{deep, nodes, links},
			schemas.request.supplychain.get.querystring
		)
	}

	list(accessToken, {dropdownlist = undefined, page = undefined, count = undefined}) {
		return this.requestJSON(
			accessToken,
			'GET',
			`supplychains?${stringify({
				dropdownlist,
				page,
				count
			})}`,
			{
				dropdownlist,
				page,
				count
			},
			schemas.request.supplychain.list.querystring
		)
	}

	update(accessToken, id, {name, nodes, links}) {
		return this.requestJSON(
			accessToken,
			'PUT',
			`supplychains/${id}`,
			{name, nodes, links},
			schemas.request.supplychain.update.body
		)
	}
}

module.exports = SupplyChains
