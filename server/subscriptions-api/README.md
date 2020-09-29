This is a Node based REST api that provides services/data about members (subscriptions), movies and the movies the members watched.

When the REST API server starts, it pulls all the data from the external members & movies web services and populates the relevant data in the relevant collections (Members & Movies collections) in the Subscriptions DB (a MongoDB data base).

At this point, the Subscriptions collection is empty (as none of the members has not watched any movie yet).

From this point, all the data will be managed in the Subscriptions DB.
