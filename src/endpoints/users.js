const {stringify} = require('query-string')
const schemas = require('@retracedgmbh/schemas')
const Endpoint = require('../endpoint')

class Users extends Endpoint {
	create(
		accessToken,
		{companyId, email, phone, firstName, middleName, lastName, lang, role, isBlocked, password, i18n, pictures}
	) {
		return this.requestJSON(
			accessToken,
			'POST',
			'users',
			{
				companyId,
				email,
				phone,
				firstName,
				middleName,
				lastName,
				lang,
				role,
				isBlocked,
				password,
				i18n,
				pictures
			},
			schemas.request.user.create.body
		)
	}

	delete(accessToken, id) {
		return this.requestJSON(accessToken, 'DELETE', `users/${id}`)
	}

	get(accessToken, id) {
		return this.requestJSON(accessToken, 'GET', `users/${id}`)
	}

	list(
		accessToken,
		{role = undefined, companyId = undefined, dropdownlist = undefined, page = undefined, count = undefined}
	) {
		return this.requestJSON(
			accessToken,
			'GET',
			`users?${stringify({role, companyId, dropdownlist, page, count})}`,
			{
				dropdownlist,
				role,
				companyId,
				page,
				count
			},
			schemas.request.user.list.querystring
		)
	}

	update(
		accessToken,
		id,
		{companyId, firstName, middleName, lastName, lang, role, isBlocked, passwordReset, i18n, pictures}
	) {
		return this.requestJSON(
			accessToken,
			'PUT',
			`users/${id}`,
			{companyId, firstName, middleName, lastName, lang, role, isBlocked, passwordReset, i18n, pictures},
			schemas.request.user.update.body
		)
	}
}

module.exports = Users
