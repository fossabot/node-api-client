const Ajv = require('ajv')
const R = require('ramda')

const ajv = new Ajv({removeAdditional: true, allErrors: true})

module.exports.ajvValidate = (schema, data) => {
	if (!schema) return data
	// It will not work with Object.assign or spread copy {...data}
	const cloneData = R.clone(data)
	const valid = ajv.validate(schema, cloneData)
	if (!valid) throw ajv.errors
	return cloneData
}
