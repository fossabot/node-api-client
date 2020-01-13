const {stringify} = require('query-string')
const schemas = require('@retracedgmbh/schemas')
const Endpoint = require('../endpoint')

class Tags extends Endpoint {
	create(accessToken, {lineId, ids}) {
		return this.requestJSON(accessToken, 'POST', `tags`, {lineId, ids}, schemas.request.tag.create.body)
	}

	delete(accessToken, {id}) {
		return this.requestJSON(accessToken, 'DELETE', `tags/${id}`)
	}

	get(accessToken, id, {existence = undefined}) {
		return this.requestJSON(
			accessToken,
			'GET',
			`tags/${id}?${stringify({existence})}`,
			{existence},
			schemas.request.tag.get.querystring
		)
	}

	getBadge(accessToken, id, badgeId) {
		return this.requestJSON(accessToken, 'GET', `tags/${id}/badges/${badgeId}`)
	}

	getBadges(accessToken, id) {
		return this.requestJSON(accessToken, 'GET', `tags/${id}/badges`)
	}

	random(accessToken, {productId = undefined, sku = undefined}) {
		return this.requestJSON(
			accessToken,
			'GET',
			`tags?${stringify({productId, sku})}`,
			{productId, sku},
			schemas.request.tag.random.querystring
		)
	}
}

module.exports = Tags
