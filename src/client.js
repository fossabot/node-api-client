const Companies = require('./endpoints/companies')
const Info = require('./endpoints/info')
const Items = require('./endpoints/items')
const Me = require('./endpoints/me')
const OrderLines = require('./endpoints/order-lines')
const Orders = require('./endpoints/orders')
const Products = require('./endpoints/products')
const Statistics = require('./endpoints/statistics')
const Status = require('./endpoints/status')
const SupplyChains = require('./endpoints/supplychains')
const UploadUrl = require('./endpoints/upload-url')
const Users = require('./endpoints/users')
const Materials = require('./endpoints/materials')
const Certificates = require('./endpoints/certificates')

class Client {
	constructor(url = 'https://api.retraced.co') {
		this.companies = new Companies(url)
		this.info = new Info(url)
		this.items = new Items(url)
		this.me = new Me(url)
		this.orderLines = new OrderLines(url)
		this.orders = new Orders(url)
		this.products = new Products(url)
		this.statistics = new Statistics(url)
		this.status = new Status(url)
		this.supplyChains = new SupplyChains(url)
		this.uploadUrl = new UploadUrl(url)
		this.users = new Users(url)
		this.materials = new Materials(url)
		this.certificates = new Certificates(url)
	}
}

module.exports = Client
