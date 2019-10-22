const schemas = require('@retracedgmbh/schemas')
const Endpoint = require('../endpoint')

class UploadUrl extends Endpoint {
	create(accessToken, isPublic, {filename, longitude, latitude}) {
		return this.requestJSON(
			accessToken,
			'POST',
			`upload-url?public=${isPublic}`,
			{filename, longitude, latitude},
			schemas.request.uploadUrl.create.body
		)
	}
}

module.exports = UploadUrl
