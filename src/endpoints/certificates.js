const schemas = require('@retracedgmbh/schemas')
const Endpoint = require('../endpoint')

class Certificates extends Endpoint {
	create(accessToken, {title, description, externalLink, pictures}) {
		return this.requestJSON(
			accessToken,
			'POST',
			'certificates',
			{
				title,
				description,
				externalLink,
				pictures
			},
			schemas.request.certificate.create.body
		)
	}

	get(accessToken, id) {
		return this.requestJSON(accessToken, 'GET', `certificates/${id}`)
	}

	getVersion(accessToken, id, version) {
		return this.requestJSON(accessToken, 'GET', `certificates/${id}/${version}`)
	}

	approve(accessToken, id, version) {
		return this.requestJSON(accessToken, 'PUT', `certificates/${id}/${version}/approve`)
	}

	reject(accessToken, id, version) {
		return this.requestJSON(accessToken, 'PUT', `certificates/${id}/${version}/reject`)
	}

	delete(accessToken, id, version) {
		return this.requestJSON(accessToken, 'DELETE', `certificates/${id}/${version}`)
	}

	update(accessToken, id, {title, description, externalLink, pictures}) {
		return this.requestJSON(
			accessToken,
			'PUT',
			`certificates/${id}`,
			{
				title,
				description,
				externalLink,
				pictures
			},
			schemas.request.certificate.update.body
		)
	}

	updateVersion(accessToken, id, version, {title, description, externalLink, pictures}) {
		return this.requestJSON(
			accessToken,
			'PUT',
			`certificates/${id}/${version}`,
			{
				title,
				description,
				externalLink,
				pictures
			},
			schemas.request.certificate.update.body
		)
	}
}

module.exports = Certificates
