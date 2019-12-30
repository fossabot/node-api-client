const schemas = require('@retracedgmbh/schemas')
const utils = require('../src/utils')

describe('AJV validation test', () => {
	describe('Validate data schema with additional properties', () => {
		test('Validate simple object', async () => {
			const data = {id: 'test-id', url: 'file://url'}

			const returnedData = utils.ajvValidate(schemas.request.file.single, data)

			expect(returnedData.id).toEqual('test-id')
			expect(returnedData.url).toEqual(undefined)
			expect(data.url).toEqual('file://url')
		})

		test('Validate array object', async () => {
			const data = [
				{
					id: 'id1',
					url: 'file://id1'
				},
				{
					id: 'id2',
					url: 'file://id2'
				}
			]

			const returnedData = utils.ajvValidate(schemas.request.file.list, data)
			expect(returnedData[0].id).toEqual('id1')
			expect(returnedData[0].url).toEqual(undefined)
			expect(data[0].url).toEqual('file://id1')
		})

		test('Validate nested object', async () => {
			const validateSchema = {
				type: 'object',
				required: ['name', 'pictures'],
				additionalProperties: false,
				properties: {
					name: {type: 'string', minLength: 1},
					pictures: schemas.request.file.list
				}
			}

			const data = {
				name: 'Name',
				pictures: [
					{
						id: 'id1',
						url: 'file://id1'
					}
				],
				description: 'D'
			}

			const returnedData = utils.ajvValidate(validateSchema, data)

			expect(returnedData.name).toEqual('Name')
			expect(returnedData.description).toEqual(undefined)
			expect(returnedData.pictures[0].id).toEqual('id1')
			expect(returnedData.pictures[0].url).toEqual(undefined)
			expect(data.pictures[0].url).toEqual('file://id1')
		})
	})
})
