const {stringify} = require('query-string')
const schemas = require('@retracedgmbh/schemas')
const Endpoint = require('../endpoint')

class Items extends Endpoint {
	create(accessToken, {id, name, unit, materialId, materialVersion}) {
		return this.requestJSON(
			accessToken,
			'POST',
			`items`,
			{id, name, unit, materialId, materialVersion},
			schemas.request.item.create.body
		)
	}

	delete(accessToken, {id}) {
		return this.requestJSON(accessToken, 'DELETE', `items/${id}`)
	}

	get(accessToken, id) {
		return this.requestJSON(accessToken, 'GET', `items/${id}`)
	}

	list(accessToken, {isMarkedForRemoval = undefined, isDropDown = undefined}, {page = undefined, count = undefined}) {
		return this.requestJSON(
			accessToken,
			'GET',
			`items?${stringify({
				page,
				count,
				isMarkedForRemoval,
				isDropDown
			})}`,
			{
				page,
				count,
				isMarkedForRemoval,
				isDropDown
			},
			schemas.request.item.list.querystring
		)
	}

	remove(accessToken, id) {
		return this.requestJSON(accessToken, 'PUT', `items/${id}/remove`)
	}

	update(accessToken, id, {name, unit, materialId, materialVersion}) {
		return this.requestJSON(
			accessToken,
			'PUT',
			`items/${id}`,
			{
				name,
				unit,
				materialId,
				materialVersion
			},
			schemas.request.item.update.body
		)
	}
}

module.exports = Items
