<p align="center">
  <a aria-label="retraced logo" href="https://github.com/retracedgmbh/schemas">
    <img src="http://retraced-static.imgix.net/Retraced_Secondary-Logo_Black.png?w=500">
  </a>
</p>

---

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/xojs/xo)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fretracedgmbh%2Fnode-api-client.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fretracedgmbh%2Fnode-api-client?ref=badge_shield)


# Description

Node.js client for the [Retraced API](https://retraced.co) service.
This client uses AJV validation based on the [retraced schemas](https://github.com/retracedgmbh/schemas). This is the fastest JSON
validator in the world and provides the fastest access to our API.

## Installation

Add the dependency to your `package.json` with:

`npm install @retracedgmbh/node-api-client --save`

## Usage

What's simpler than 2 lines of code?

```javascript
const { Client } = require("@retracedgmbh/node-api-client")
const client = new Client("API_HOST") // https://api.retraced.co 
```

All functions return promises so you can chain them or just `await` them.

### Users

Using the `users` endpoint  on the client you can create / get or delete users:

```javascript
// Get single user
users = await client.users.get(accessToken, userId)

// Delete a user by id
user =
  await client.users.delete(accessToken, userId)
```

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fretracedgmbh%2Fnode-api-client.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fretracedgmbh%2Fnode-api-client?ref=badge_large)