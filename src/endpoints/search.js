const {stringify} = require('query-string')
const schemas = require('@retracedgmbh/schemas')
const Endpoint = require('../endpoint')

class Search extends Endpoint {
	list({keyword, category = undefined}, {page = undefined, count = undefined}) {
		return this.requestJSON(
			'',
			'GET',
			`/search?${stringify({
				q: keyword,
				category,
				page,
				count
			})}`,
			{
				q: keyword,
				category,
				page,
				count
			},
			schemas.request.search.list.querystring
		)
	}
}

module.exports = Search
