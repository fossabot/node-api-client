const {stringify} = require('query-string')
const schemas = require('@retracedgmbh/schemas')
const Endpoint = require('../endpoint')

class Certificates extends Endpoint {
	create(accessToken, {title, description, externalLink, logoFileId, pictures}) {
		return this.requestJSON(
			accessToken,
			'POST',
			'certificates',
			{
				title,
				description,
				externalLink,
				logoFileId,
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

	acknowledge(accessToken, id, version) {
		return this.requestJSON(accessToken, 'PUT', `certificates/${id}/${version}/acknowledge`)
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
			`certificates?${stringify({
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
			schemas.request.certificate.list.querystring
		)
	}

	remove(accessToken, id, version) {
		return this.requestJSON(accessToken, 'PUT', `certificates/${id}/${version}/remove`)
	}

	archive(accessToken, id, version) {
		return this.requestJSON(accessToken, 'PUT', `certificates/${id}/${version}/archive`)
	}

	request(accessToken, id, version) {
		return this.requestJSON(accessToken, 'PUT', `certificates/${id}/${version}/request`)
	}

	createNewVersion(accessToken, id, {title, description, externalLink, logoFileId, pictures}) {
		return this.requestJSON(
			accessToken,
			'POST',
			`certificates/${id}`,
			{
				title,
				description,
				externalLink,
				logoFileId,
				pictures
			},
			schemas.request.certificate.update.body
		)
	}

	update(accessToken, id, version, {title, description, externalLink, logoFileId, pictures}) {
		return this.requestJSON(
			accessToken,
			'PUT',
			`certificates/${id}/${version}`,
			{
				title,
				description,
				externalLink,
				logoFileId,
				pictures
			},
			schemas.request.certificate.update.body
		)
	}
}

module.exports = Certificates
