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
			geojson,
			description,
			videoUrl,
			companySize,
			companyType,
			founded
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
				geojson,
				description,
				videoUrl,
				companySize,
				companyType,
				founded
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

	archive(accessToken, id) {
		return this.requestJSON(accessToken, 'PUT', `companies/${id}/archive`)
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

	get(accessToken, id) {
		return this.requestJSON(accessToken, 'GET', `companies/${id}`)
	}

	list(
		accessToken,
		{
			sort = undefined,
			isMarkedForRemoval = undefined,
			country = undefined,
			founded = undefined,
			companySize = undefined,
			companyType = undefined,
			isArchived = undefined,
			isDropDown = undefined
		},
		{page = undefined, count = undefined}
	) {
		return this.requestJSON(
			accessToken,
			'GET',
			`companies?${stringify({
				sort,
				page,
				count,
				isMarkedForRemoval,
				country,
				founded,
				companySize,
				companyType,
				isArchived,
				isDropDown
			})}`,
			{
				sort,
				page,
				count,
				isMarkedForRemoval,
				country,
				founded,
				companySize,
				companyType,
				isArchived,
				isDropDown
			},
			schemas.request.company.list.querystring
		)
	}

	update(
		accessToken,
		id,
		{
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
			geojson,
			description,
			videoUrl,
			companySize,
			companyType,
			founded
		}
	) {
		return this.requestJSON(
			accessToken,
			'PUT',
			`companies/${id}`,
			{
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
				geojson,
				description,
				videoUrl,
				companySize,
				companyType,
				founded
			},
			schemas.request.company.update.body
		)
	}
}

module.exports = Companies
