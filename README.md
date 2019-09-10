# Redis - Express - MongoDb

The goal of this repository is to develop an API for a feed of posts from a predetermined user pool, like Twitter.

After gaining an understanding of this minimalistic archetecture, I plan to scale the server out across multiple machines using Docker and Redis-Cluster.

Challenges include integrating Redis with controllers and defining a cache-policy. There are multiple way to store and update a user's home feed and deciding how to implement that will be difficult.

## Models

### User

A user contains authentication data such as username, password etc, as well as references to their tweets, and followers.

### Tweet

A tweet contains only the content limited to 140 characters, the date and time it was created, and a reference to its author.
