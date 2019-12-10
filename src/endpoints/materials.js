const {stringify} = require('query-string')
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

	acknowledge(accessToken, id, version) {
		return this.requestJSON(accessToken, 'PUT', `materials/${id}/${version}/acknowledge`)
	}

	remove(accessToken, id, version) {
		return this.requestJSON(accessToken, 'PUT', `materials/${id}/${version}/remove`)
	}

	archive(accessToken, id, version) {
		return this.requestJSON(accessToken, 'PUT', `materials/${id}/${version}/archive`)
	}

	request(accessToken, id, version) {
		return this.requestJSON(accessToken, 'PUT', `materials/${id}/${version}/request`)
	}

	list(
		accessToken,
		{
			status = undefined,
			sort = undefined,
			isActive = undefined,
			isMarkedForRemoval = undefined,
			isDropdown = undefined,
			isArchived = undefined
		},
		{page = undefined, count = undefined}
	) {
		return this.requestJSON(
			accessToken,
			'GET',
			`materials?${stringify({
				status,
				sort,
				isActive,
				isMarkedForRemoval,
				isDropdown,
				isArchived,
				page,
				count
			})}`,
			{
				status,
				sort,
				isActive,
				isMarkedForRemoval,
				isDropdown,
				isArchived,
				page,
				count
			},
			schemas.request.material.list.querystring
		)
	}

	createNewVersion(accessToken, id, {title, description, externalLink, categories, pictures}) {
		return this.requestJSON(
			accessToken,
			'POST',
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

	update(accessToken, id, version, {title, description, externalLink, categories, pictures}) {
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
