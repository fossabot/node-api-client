const {stringify} = require('query-string')
const schemas = require('@retracedgmbh/schemas')
const Endpoint = require('../endpoint')

class Companies extends Endpoint {
	create(
		accessToken,
		{
			officialName,
			name,
			country,
			pictures,
			taxNo,
			county,
			city,
			zipCode,
			addressLine1,
			addressLine2,
			email,
			phone1,
			phone2,
			website,
			latitude,
			longitude,
			description
		}
	) {
		return this.requestJSON(
			accessToken,
			'POST',
			'companies',
			{
				officialName,
				name,
				country,
				pictures,
				taxNo,
				county,
				city,
				zipCode,
				addressLine1,
				addressLine2,
				email,
				phone1,
				phone2,
				website,
				latitude,
				longitude,
				description
			},
			schemas.request.company.create.body
		)
	}

	delete(accessToken, id, {deleteUsers = false}) {
		return this.requestJSON(
			accessToken,
			'DELETE',
			`companies/${id}`,
			{deleteUsers},
			schemas.request.company.delete.querystring
		)
	}

	remove(accessToken, id) {
		return this.requestJSON(accessToken, 'PUT', `companies/${id}/remove`)
	}

	find(accessToken, {country, taxNo}) {
		return this.requestJSON(
			accessToken,
			'GET',
			`companies/find?country=${country}&taxNo=${taxNo}`,
			{country, taxNo},
			schemas.request.company.find.querystring
		)
	}

	get(accessToken, id, {statistics = undefined}) {
		return this.requestJSON(
			accessToken,
			'GET',
			`companies/${id}?${stringify({statistics})}`,
			{statistics},
			schemas.request.company.get.querystring
		)
	}

	list(accessToken, {dropdownlist = undefined, page = undefined, count = undefined}) {
		return this.requestJSON(
			accessToken,
			'GET',
			`companies?${stringify({
				dropdownlist,
				page,
				count
			})}`,
			{
				dropdownlist,
				page,
				count
			},
			schemas.request.company.list.querystring
		)
	}

	update(
		accessToken,
		id,
		{
			officialName,
			name,
			county,
			pictures,
			city,
			zipCode,
			addressLine1,
			addressLine2,
			email,
			phone1,
			phone2,
			website,
			latitude,
			longitude,
			description
		}
	) {
		return this.requestJSON(
			accessToken,
			'PUT',
			`companies/${id}`,
			{
				officialName,
				name,
				county,
				pictures,
				city,
				zipCode,
				addressLine1,
				addressLine2,
				email,
				phone1,
				phone2,
				website,
				latitude,
				longitude,
				description
			},
			schemas.request.company.update.body
		)
	}
}

module.exports = Companies
