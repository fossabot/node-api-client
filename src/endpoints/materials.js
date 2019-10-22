const schemas = require('@retracedgmbh/schemas')
const Endpoint = require('../endpoint')

class Materials extends Endpoint {
	create(accessToken, {title, description, externalLink, categories, pictures}) {
		return this.requestJSON(
			accessToken,
			'POST',
			'materials',
			{
				title,
				description,
				externalLink,
				categories,
				pictures
			},
			schemas.request.material.create.body
		)
	}

	get(accessToken, id) {
		return this.requestJSON(accessToken, 'GET', `materials/${id}`)
	}

	getVersion(accessToken, id, version) {
		return this.requestJSON(accessToken, 'GET', `materials/${id}/${version}`)
	}

	approve(accessToken, id, version) {
		return this.requestJSON(accessToken, 'PUT', `materials/${id}/${version}/approve`)
	}

	reject(accessToken, id, version) {
		return this.requestJSON(accessToken, 'PUT', `materials/${id}/${version}/reject`)
	}

	delete(accessToken, id, version) {
		return this.requestJSON(accessToken, 'DELETE', `materials/${id}/${version}`)
	}

	update(accessToken, id, {title, description, externalLink, categories, pictures}) {
		return this.requestJSON(
			accessToken,
			'PUT',
			`materials/${id}`,
			{
				title,
				description,
				externalLink,
				categories,
				pictures
			},
			schemas.request.material.update.body
		)
	}

	updateVersion(accessToken, id, version, {title, description, externalLink, categories, pictures}) {
		return this.requestJSON(
			accessToken,
			'PUT',
			`materials/${id}/${version}`,
			{
				title,
				description,
				externalLink,
				categories,
				pictures
			},
			schemas.request.material.update.body
		)
	}
}

module.exports = Materials
