const {stringify} = require('query-string')
const schemas = require('@retracedgmbh/schemas')
const Endpoint = require('../endpoint')

class Claims extends Endpoint {
	create(
		accessToken,
		{
			claimantId,
			geojson,
			explanation,
			referenceClaimId,
			referenceClaimVersion,
			claimingBadgeId,
			claimingBadgeVersion,
			claimingCertificateId,
			claimingCertificateVersion,
			otherCompanyId,
			type,
			files
		}
	) {
		return this.requestJSON(
			accessToken,
			'POST',
			'claims',
			{
				claimantId,
				geojson,
				explanation,
				referenceClaimId,
				referenceClaimVersion,
				claimingBadgeId,
				claimingBadgeVersion,
				claimingCertificateId,
				claimingCertificateVersion,
				otherCompanyId,
				type,
				files
			},
			schemas.request.claim.create.body
		)
	}

	get(accessToken, id) {
		return this.requestJSON(accessToken, 'GET', `claims/${id}`)
	}

	getVersion(accessToken, id, version) {
		return this.requestJSON(accessToken, 'GET', `claims/${id}/${version}`)
	}

	approve(accessToken, id, version) {
		return this.requestJSON(accessToken, 'PUT', `claims/${id}/${version}/approve`)
	}

	reject(accessToken, id, version) {
		return this.requestJSON(accessToken, 'PUT', `claims/${id}/${version}/reject`)
	}

	acknowledge(accessToken, id, version) {
		return this.requestJSON(accessToken, 'PUT', `claims/${id}/${version}/acknowledge`)
	}

	list(
		accessToken,
		{
			status = undefined,
			sort = undefined,
			isActive = undefined,
			isMarkedForRemoval = undefined,
			isDropDown = undefined,
			isArchived = undefined,
			companyId = undefined
		},
		{page = undefined, count = undefined}
	) {
		return this.requestJSON(
			accessToken,
			'GET',
			`claims?${stringify({
				status,
				sort,
				isActive,
				isMarkedForRemoval,
				isDropDown,
				isArchived,
				companyId,
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
				companyId,
				page,
				count
			},
			schemas.request.claim.list.querystring
		)
	}

	remove(accessToken, id, version) {
		return this.requestJSON(accessToken, 'PUT', `claims/${id}/${version}/remove`)
	}

	archive(accessToken, id, version) {
		return this.requestJSON(accessToken, 'PUT', `claims/${id}/${version}/archive`)
	}

	request(accessToken, id, version) {
		return this.requestJSON(accessToken, 'PUT', `claims/${id}/${version}/request`)
	}

	createNewVersion(
		accessToken,
		id,
		{
			geojson,
			explanation,
			referenceClaimId,
			referenceClaimVersion,
			claimingBadgeVersion,
			claimingCertificateVersion,
			files
		}
	) {
		return this.requestJSON(
			accessToken,
			'POST',
			`claims/${id}`,
			{
				geojson,
				explanation,
				referenceClaimId,
				referenceClaimVersion,
				claimingBadgeVersion,
				claimingCertificateVersion,
				files
			},
			schemas.request.claim.update.body
		)
	}

	update(
		accessToken,
		id,
		version,
		{
			geojson,
			explanation,
			referenceClaimId,
			referenceClaimVersion,
			claimingBadgeVersion,
			claimingCertificateVersion,
			files
		}
	) {
		return this.requestJSON(
			accessToken,
			'PUT',
			`claims/${id}/${version}`,
			{
				geojson,
				explanation,
				referenceClaimId,
				referenceClaimVersion,
				claimingBadgeVersion,
				claimingCertificateVersion,
				files
			},
			schemas.request.claim.update.body
		)
	}
}

module.exports = Claims
