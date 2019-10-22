const nock = require('nock')
const Endpoint = require('../src/endpoint')

const apiHost = 'https://api.staging.retraced.co'

describe('Endpoint', () => {
	const endpoint = new Endpoint(apiHost)

	describe('Making a request', () => {
		test('it returns a response', async () => {
			nock(apiHost)
				.get('/')
				.reply(200, 'BODY')

			const response = await endpoint.requestJSON('access_token', 'get', '')

			expect(response.data.toString()).toEqual('BODY')
		})
	})

	describe('Handling 401', () => {
		test('throws an error', async () => {
			nock(apiHost)
				.get('/')
				.reply(401, '')

			try {
				await endpoint.requestJSON('access_token', 'get', '')
			} catch (error) {
				expect(error.response.status).toEqual(401)
			}
		})
	})

	describe('Handling 400', () => {
		test('throws an error', async () => {
			nock(apiHost)
				.get('/')
				.reply(400, '{"test":"TEST"}')

			try {
				await endpoint.requestJSON('access_token', 'get', '')
			} catch (error) {
				expect(error.response.status).toEqual(400)
				expect(error.response.data).toEqual({test: 'TEST'})
			}
		})
	})

	describe('Handling 400', () => {
		test('throws an error', async () => {
			nock(apiHost)
				.get('/')
				.reply(404, '')

			try {
				await endpoint.requestJSON('access_token', 'get', '')
			} catch (error) {
				expect(error.response.status).toEqual(404)
			}
		})
	})
})
