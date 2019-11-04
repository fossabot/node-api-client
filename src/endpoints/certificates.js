const {stringify} = require('query-string')
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

	list(accessToken, {status = undefined, sort = undefined}, {page = undefined, count = undefined}) {
		return this.requestJSON(
			accessToken,
			'GET',
			`certificates?${stringify({
				status,
				sort,
				page,
				count
			})}`,
			{
				status,
				sort,
				page,
				count
			},
			schemas.request.certificate.list.querystring
		)
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
