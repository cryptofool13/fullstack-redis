## Redis - Express - MongoDb

The goal of this repository is to develop an API for a feed of posts from a predetermined user pool, like Twitter.

### index.js
- import local modules app.js, router.js and db.js as a passive import
- passing app to router gives a modular setup for future development.
- initiate app with app.listen

### app.js
- import express and body-parser
- call express and add body-parser middleware

### router.js
- import User model
- export function passing app as a single argument
- define routes using app.VERB following express API
- define route handlers in separate controllers directory

### db.js
- import mongoose and connect to local MongoDb server

### user.js
- import Schema and model from mongoose
- define user schema, ignoring password security for proof of concept
