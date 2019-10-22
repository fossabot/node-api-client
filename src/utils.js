const Ajv = require('ajv')

const ajv = new Ajv({removeAdditional: true, allErrors: true})

module.exports.ajvValidate = (schema, data) => {
	if (!schema) return data
	const valid = ajv.validate(schema, data)
	if (!valid) throw ajv.errors
	return data
}
