const {stringify} = require('query-string')
const schemas = require('@retracedgmbh/schemas')
const Endpoint = require('../endpoint')

class Badges extends Endpoint {
	create(accessToken, {title, icon, category, description, rule, pictures}) {
		return this.requestJSON(
			accessToken,
			'POST',
			'badges',
			{
				title,
				icon,
				category,
				description,
				rule,
				pictures
			},
			schemas.request.badge.create.body
		)
	}

	get(accessToken, id) {
		return this.requestJSON(accessToken, 'GET', `badges/${id}`)
	}

	getVersion(accessToken, id, version) {
		return this.requestJSON(accessToken, 'GET', `badges/${id}/${version}`)
	}

	approve(accessToken, id, version) {
		return this.requestJSON(accessToken, 'PUT', `badges/${id}/${version}/approve`)
	}

	reject(accessToken, id, version) {
		return this.requestJSON(accessToken, 'PUT', `badges/${id}/${version}/reject`)
	}

	acknowledge(accessToken, id, version) {
		return this.requestJSON(accessToken, 'PUT', `badges/${id}/${version}/acknowledge`)
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
			`badges?${stringify({
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
			schemas.request.badge.list.querystring
		)
	}

	remove(accessToken, id, version) {
		return this.requestJSON(accessToken, 'PUT', `badges/${id}/${version}/remove`)
	}

	archive(accessToken, id, version) {
		return this.requestJSON(accessToken, 'PUT', `badges/${id}/${version}/archive`)
	}

	request(accessToken, id, version) {
		return this.requestJSON(accessToken, 'PUT', `badges/${id}/${version}/request`)
	}

	createNewVersion(accessToken, id, {title, icon, category, description, rule, pictures}) {
		return this.requestJSON(
			accessToken,
			'POST',
			`badges/${id}`,
			{
				title,
				icon,
				category,
				description,
				rule,
				pictures
			},
			schemas.request.badge.update.body
		)
	}

	update(accessToken, id, version, {title, icon, category, description, rule, pictures}) {
		return this.requestJSON(
			accessToken,
			'PUT',
			`badges/${id}/${version}`,
			{
				title,
				icon,
				category,
				description,
				rule,
				pictures
			},
			schemas.request.badge.update.body
		)
	}
}

module.exports = Badges
